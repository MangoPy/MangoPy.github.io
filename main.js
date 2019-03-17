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

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"show=='icon'\">\r\n   <div class=\"nav-item dropdown\">\r\n    <a class=\"nav-link dropdown-toggle vertical-center\" style=\"padding:0; color: Black;\" href=\"javascript:void(0)\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      <i *ngIf=\"!LS.islogged\" class='fas fa-user'> Login</i>\r\n      <img *ngIf=\"LS.islogged\" class=\"account-image-small\" src=\"{{LS.data.user.info.picture}}\">\r\n    </a>\r\n    <div class=\"dropdown-menu dropdown-menu-right primary\" aria-labelledby=\"navbarDropdown\">\r\n      <a class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"AC.login()\" >\r\n        <ng-container *ngIf=\"LS.islogged\">\r\n          Change user\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!LS.islogged\">\r\n          Login with google\r\n        </ng-container></a>\r\n        <a class=\"dropdown-item\" href=\"/dashboard\">\r\n          <ng-container *ngIf=\"LS.islogged\">\r\n            Dashboard\r\n          </ng-container>\r\n        </a>\r\n      <div class=\"dropdown-divider\" *ngIf=\"LS.islogged\"></div>\r\n      <a class=\"dropdown-item\" (click)=\"AC.logout()\" *ngIf=\"LS.islogged\" href=\"javascript:void(0)\">Logout</a>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"show=='dashboard'\">\r\n  <div (click)=\"LS.islogged?AC.logout():AC.login()\">\r\n      <button style=\"border-radius:0px;\" *ngIf=\"!AC.islogged\" class=\"material-icons btn btn-danger\">Login with <i class=\"icon-google-plus\"></i></button>\r\n      <img *ngIf=\"LS.islogged\" class=\"account-image-small\" src=\"{{LS.data.user.info.picture}}\">\r\n  </div>\r\n </ng-container>\r\n<!--ng-container>\r\n  <!-- Nothing so show splash screen \r\n  <button *ngIf=\"!LS.islogged\" (click)=\"AC.login()\">Login with google</button>\r\n</ng-container-->"

/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-image-small {\n  width: 40px;\n  border-radius: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9DOlxcVXNlcnNcXE1heWFua1xcRGVza3RvcFxcTWFuZ29ieXRlXFxtYW5nb2J5dGUvc3JjXFxhcHBcXGFjY291bnRcXGFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtaW1hZ2Utc21hbGx7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");




//import { AccountService } from '../about/account.service';
var AccountComponent = /** @class */ (function () {
    function AccountComponent(cdr, AC, LS) {
        this.cdr = cdr;
        this.AC = AC;
        this.LS = LS;
        LS.addChild(this);
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.ngAfterViewInit = function () {
        this.AC.startApp();
    };
    AccountComponent.prototype.refresh = function () {
        this.cdr.detectChanges();
        console.log(this.LS.islogged, "\n CDR was called account component");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AccountComponent.prototype, "show", void 0);
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"], _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/account/account.service.ts":
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");




var AccountService = /** @class */ (function () {
    function AccountService(http, LS) {
        this.http = http;
        this.LS = LS;
        this.users = [];
        this.initialized = false;
        var self = this;
        if (this.initialized)
            return;
        this.initialized = true;
        this.startApp = function () {
            window['gapi'].load('auth2', function () {
                window['auth2'] = window['gapi'].auth2.init({
                    client_id: '716951121838-plvdimng1engvdjog7fp8hlg8g8th6c2.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                });
                window['auth2'].isSignedIn.listen(function (val) { self.signinChanged(val, self); });
                window['auth2'].currentUser.listen(function (val) { return self.userChanged(val, self); });
                if (window['auth2'].isSignedIn.get() == true) {
                    // check login service that if user is logged or not
                    if (self.LS.islogged) {
                        // nothing to do from server side
                    }
                    else {
                        // user not already logged, so google login now note: login can still be denied from LS
                        console.log("Calling login");
                        self.LS.google_login(window['auth2'].currentUser.get().getAuthResponse().id_token);
                    }
                }
            });
        };
        console.log("Service called once");
    }
    AccountService.prototype.getAllUsers = function () {
    };
    AccountService.prototype.signinChanged = function (val, self) {
        /**
         * on refresh if
         *  user is logged : it will be called
         *  user is not logged : it wont be called
         * on login change: it will be called
         */
        console.log("I was called", val);
        try {
            if (val) {
                // user is signed in
                self.LS.google_login(window['auth2'].currentUser.get().getAuthResponse().id_token);
            }
            else {
                // user is logged out, first logout from LS
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    AccountService.prototype.google_success = function (googleUser) {
        console.log(googleUser);
    };
    AccountService.prototype.google_failed = function (error) {
        console.log(error);
    };
    AccountService.prototype.logout = function () {
        console.log("AC logout called");
        window['auth2'].signOut();
        this.LS.logout((function () {
            console.log("Logging out from");
        }));
    };
    AccountService.prototype.login = function () {
        // check if google already logged? then logout
        if (window['auth2'].isSignedIn.get())
            window['auth2'].signOut();
        window['auth2'].signIn();
    };
    AccountService.prototype.userChanged = function (val, self) {
        if (!val.isSignedIn()) {
            self.user = null;
            self.islogged = false;
            return;
        }
    };
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");





var routes = [
    //{path:'blog/:id', component:BlogdetailsComponent},
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: ':id', component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--app-nav></app-nav-->\r\n    \r\n<!-- <app-blog [do]=\"{'show':'preview', 'id':'1'}\"></app-blog>\r\n<router-outlet></router-outlet>\r\n    <app-blog [do]=\"{'show':'complete', 'id':'1'}\"></app-blog>\r\n<app-blog [do]=\"{'show':'create', 'id':'1'}\"></app-blog> \r\n<app-account></app-account>\r\n-->\r\n\r\n<!-- <app-footer></app-footer> -->\r\n<router-outlet></router-outlet> \r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'mangobyte';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/home/home.component */ "./src/app/nav/home/home.component.ts");
/* harmony import */ var _nav_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/about/about.component */ "./src/app/nav/about/about.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _courses_components_entrepr_entrepr_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./courses/components/entrepr/entrepr.component */ "./src/app/courses/components/entrepr/entrepr.component.ts");
/* harmony import */ var _courses_components_acad_acad_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./courses/components/acad/acad.component */ "./src/app/courses/components/acad/acad.component.ts");
/* harmony import */ var _courses_components_public_public_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./courses/components/public/public.component */ "./src/app/courses/components/public/public.component.ts");
/* harmony import */ var _courses_components_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./courses/components/corporate/corporate.component */ "./src/app/courses/components/corporate/corporate.component.ts");
/* harmony import */ var _courses_components_politics_politics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./courses/components/politics/politics.component */ "./src/app/courses/components/politics/politics.component.ts");
/* harmony import */ var _nav_mentors_mentors_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav/mentors/mentors.component */ "./src/app/nav/mentors/mentors.component.ts");
/* harmony import */ var _nav_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav/contact/contact.component */ "./src/app/nav/contact/contact.component.ts");
/* harmony import */ var _nav_details_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nav/details/details.component */ "./src/app/nav/details/details.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _courses_components_blogdetails_blogdetails_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./courses/components/blogdetails/blogdetails.component */ "./src/app/courses/components/blogdetails/blogdetails.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _blog_create_blogcategory_blogcategory_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blog/create/blogcategory/blogcategory.component */ "./src/app/blog/create/blogcategory/blogcategory.component.ts");
/* harmony import */ var _nav_interviews_interviews_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./nav/interviews/interviews.component */ "./src/app/nav/interviews/interviews.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_components_interv_interv_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/components/interv/interv.component */ "./src/app/dashboard/components/interv/interv.component.ts");
/* harmony import */ var _dashboard_components_cour_cour_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dashboard/components/cour/cour.component */ "./src/app/dashboard/components/cour/cour.component.ts");
/* harmony import */ var _blog_create_create_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./blog/create/create.component */ "./src/app/blog/create/create.component.ts");
/* harmony import */ var _nav_previewdisplayer_previewdisplayer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./nav/previewdisplayer/previewdisplayer.component */ "./src/app/nav/previewdisplayer/previewdisplayer.component.ts");
/* harmony import */ var _nav_previewdisplayer_editbc_editbc_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./nav/previewdisplayer/editbc/editbc.component */ "./src/app/nav/previewdisplayer/editbc/editbc.component.ts");
/* harmony import */ var _courses_components_blogdetails_comment_comment_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./courses/components/blogdetails/comment/comment.component */ "./src/app/courses/components/blogdetails/comment/comment.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");

































var appRoutes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _nav_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _nav_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_8__["CoursesComponent"],
                _courses_components_entrepr_entrepr_component__WEBPACK_IMPORTED_MODULE_9__["EntreprComponent"],
                _courses_components_acad_acad_component__WEBPACK_IMPORTED_MODULE_10__["AcadComponent"],
                _courses_components_public_public_component__WEBPACK_IMPORTED_MODULE_11__["PublicComponent"],
                _courses_components_corporate_corporate_component__WEBPACK_IMPORTED_MODULE_12__["CorporateComponent"],
                _courses_components_politics_politics_component__WEBPACK_IMPORTED_MODULE_13__["PoliticsComponent"],
                _nav_mentors_mentors_component__WEBPACK_IMPORTED_MODULE_14__["MentorsComponent"],
                _nav_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                _nav_details_details_component__WEBPACK_IMPORTED_MODULE_16__["DetailsComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _courses_components_blogdetails_blogdetails_component__WEBPACK_IMPORTED_MODULE_21__["BlogdetailsComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_22__["BlogComponent"],
                _nav_interviews_interviews_component__WEBPACK_IMPORTED_MODULE_24__["InterviewsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                _dashboard_components_interv_interv_component__WEBPACK_IMPORTED_MODULE_26__["IntervComponent"],
                _dashboard_components_cour_cour_component__WEBPACK_IMPORTED_MODULE_27__["CourComponent"],
                _blog_create_create_component__WEBPACK_IMPORTED_MODULE_28__["CreateComponent"],
                _blog_create_blogcategory_blogcategory_component__WEBPACK_IMPORTED_MODULE_23__["BlogcategoryComponent"],
                _nav_previewdisplayer_previewdisplayer_component__WEBPACK_IMPORTED_MODULE_29__["PreviewdisplayerComponent"],
                _nav_previewdisplayer_editbc_editbc_component__WEBPACK_IMPORTED_MODULE_30__["EditbcComponent"],
                _courses_components_blogdetails_comment_comment_component__WEBPACK_IMPORTED_MODULE_31__["CommentComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_32__["AccountComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: false }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            ],
            providers: [ /*LoginService, AccountService, BlogService, BlogcategoryService*/],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.html":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.scss":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog/blog.service.ts");



var BlogComponent = /** @class */ (function () {
    function BlogComponent(BS, cdr) {
        this.BS = BS;
        this.cdr = cdr;
        this.refreshed = false;
        BS.addChild(this);
    }
    BlogComponent.prototype.refresh = function () {
        this.refreshed = true;
        //console.log('I was called');
        this.cdr.detectChanges();
    };
    BlogComponent.prototype.ngOnInit = function () {
        var self = this;
        //if(this.do.show!="create")
        //this.BS.getblog(this.do['id'], self);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlogComponent.prototype, "do", void 0);
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/blog/blog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog/blog.service.ts ***!
  \**************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var BlogService = /** @class */ (function () {
    function BlogService(LS) {
        this.LS = LS;
        this.Blogs = {};
        //refresh childs
        this.child_elements = [];
        this.getAllBlogs();
    }
    BlogService.prototype.getAllBlogs = function () {
        var _this = this;
        // only the previews will be loaded
        this.LS.http.get(this.LS.serverurl + 'blogs/blog/', {
            headers: this.LS.getHeaders()
        }).subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var x = data_1[_i];
                x.preview = JSON.parse(x.preview);
                _this.Blogs[x.url] = x;
            }
            console.log(_this.Blogs);
        }, function (error) { return console.log(error); }, function () {
            _this.refresh();
        });
    };
    BlogService.prototype.getBlog = function (url) {
        // returns s subscribable that will provide the body as well
        return this.LS.http.get(url);
    };
    BlogService.prototype.create_blog = function (name, category, blog_type, preview) {
        var _this = this;
        this.LS.http.post(this.LS.serverurl + 'blogs/blog/', new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('name', name)
            .set('blog_type', blog_type)
            .set('category', category)
            .set('preview', JSON.stringify(preview)), {
            headers: this.LS.getHeaders()
        }).subscribe(function (data) {
            _this.Blogs[data.url] = data;
            alert('Blog is created successfully');
            _this.refresh();
        });
    };
    BlogService.prototype.update_blog = function (url, name, preview) {
        var _this = this;
        if (preview === void 0) { preview = null; }
        // making sure to preserve other datas
        if (preview.med_url.indexOf("https://drive.google.com/file/d/") != -1) {
            // drive image
            preview.med_url = "https://drive.google.com/uc?export=view&id=" + preview.med_url.split("/")[5];
        }
        //console.log(preview);
        for (var x in preview) {
            // body is a {}
            if (preview[x].length == 0)
                continue;
            this.Blogs[url].preview[x] = preview[x];
        }
        var json_body = JSON.stringify(this.Blogs[url].preview);
        console.log(json_body);
        this.LS.http.patch(url + "?do=preview", new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('name', name).set('preview', json_body), {
            headers: this.LS.getHeaders()
        }).subscribe(function (x) {
            x.preview = JSON.parse(x.preview);
            _this.Blogs[x.url] = x;
            _this.refresh();
        });
    };
    BlogService.prototype.refresh = function () {
        for (var x in this.child_elements) {
            this.child_elements[x].refresh();
        }
    };
    BlogService.prototype.addChild = function (x) {
        if (this.child_elements.indexOf(x) == -1) {
            this.child_elements.push(x);
        }
    };
    BlogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/blog/create/blogcategory/blogcategory.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/blog/create/blogcategory/blogcategory.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li *ngFor=\"let blgc of clevelblogs\" class=\"list-group-item\">\r\n    <i style=\"font-size:13px; background:#fc4b6c;color:#fff;border-radius:10px;padding: 5px;\" (click)=\"toggle_child(blgc);\" class=\"fas fa-minus\"></i>\r\n    <span>\r\n        {{BCS.BlogCategories[blgc]?.name}}\r\n    </span>\r\n    <input  type=\"radio\" style=\"float:right;\" name=\"shit\" (click)=\"parent_element.selected_blog_category(BCS.BlogCategories[blgc]);\">\r\n    <ul class=\"list-group inner\" id=\"{{blgc}}\" style=\"display: none;\">\r\n        <app-blogcategory [parentBlogCategory]=\"blgc\" [parent_element]='parent_element'></app-blogcategory>\r\n    </ul>\r\n</li>\r\n<li class=\"list-group-item\">\r\n    <button class=\"btn btn-success\" (click)=\"show_cnew()\"><i style=\"font-size:15px;\" class=\"fas fa-plus\"></i></button>\r\n</li>\r\n<div \r\n    id=\"{{this.parentBlogCategory}}_cnew_div\"\r\n    style=\"position:fixed; background-color: rgba(0,0,0,0.3); top:0; left:0;right: 0;bottom: 0; z-index: 4;display:none;\">\r\n    <div class=\"card\" style=\"position: absolute; top:50%; left: 50%; transform: translate(-50%, -50%);padding:20px;\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">Group Name</h5>\r\n            <input #bcname class=\"form-control\" type=\"text\">\r\n            <div class=\"modal-footer\">\r\n            <button class=\"btn btn-secondary\" (click)=\"this.BCS.create_bc(this.parentBlogCategory, bcname.value);hide_cnew();\">Create</button>\r\n            <button class=\"btn btn-danger\" (click)=\"hide_cnew();\">Cancel</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/blog/create/blogcategory/blogcategory.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/blog/create/blogcategory/blogcategory.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n  border-width: 0;\n  border-left-width: 1px;\n  border-color: rgba(0, 0, 0, 0.5);\n  border-radius: 0 !important; }\n\n.hide {\n  display: none; }\n\n.show {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9jcmVhdGUvYmxvZ2NhdGVnb3J5L0M6XFxVc2Vyc1xcTWF5YW5rXFxEZXNrdG9wXFxNYW5nb2J5dGVcXG1hbmdvYnl0ZS9zcmNcXGFwcFxcYmxvZ1xcY3JlYXRlXFxibG9nY2F0ZWdvcnlcXGJsb2djYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFlO0VBQ2YsdUJBQXNCO0VBQ3RCLGlDQUE2QjtFQUM3Qiw0QkFBMkIsRUFDOUI7O0FBQ0Q7RUFDSSxjQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxlQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9jcmVhdGUvYmxvZ2NhdGVnb3J5L2Jsb2djYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxpe1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5oaWRle1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbi5zaG93e1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/blog/create/blogcategory/blogcategory.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/blog/create/blogcategory/blogcategory.component.ts ***!
  \********************************************************************/
/*! exports provided: BlogcategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogcategoryComponent", function() { return BlogcategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blogcategory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blogcategory.service */ "./src/app/blog/create/blogcategory/blogcategory.service.ts");



var $;
var BlogcategoryComponent = /** @class */ (function () {
    function BlogcategoryComponent(BCS, cdr) {
        this.BCS = BCS;
        this.cdr = cdr;
        this.parentBlogCategory = '';
        this.clevelblogs = [];
        this.hide_child = true;
        BCS.child_elements.push(this);
    }
    BlogcategoryComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    BlogcategoryComponent.prototype.refresh = function () {
        var parent = null;
        this.clevelblogs = [];
        //console.log(this.parentBlogCategory);
        if (this.parentBlogCategory == undefined || this.parentBlogCategory == '')
            this.parentBlogCategory = 'root';
        if (this.parentBlogCategory != 'root') {
            parent = this.parentBlogCategory;
        }
        for (var cat in this.BCS.BlogCategories) {
            if (this.BCS.BlogCategories[cat].category == parent)
                this.clevelblogs.push(cat);
        }
    };
    BlogcategoryComponent.prototype.toggle_child = function (blgc) {
        var e = document.getElementById(blgc);
        if (e.style.display == 'none')
            e.style.display = 'block';
        else
            e.style.display = 'none';
    };
    BlogcategoryComponent.prototype.show_cnew = function () {
        if (this.parentBlogCategory == undefined)
            this.parentBlogCategory = '';
        document.getElementById(this.parentBlogCategory + '_cnew_div').style.display = 'block';
    };
    BlogcategoryComponent.prototype.hide_cnew = function () {
        document.getElementById(this.parentBlogCategory + '_cnew_div').style.display = 'none';
    };
    BlogcategoryComponent.prototype.add_blog = function () {
        this.BCS.create_bc(this.parentBlogCategory, document.getElementById(this.parentBlogCategory + '_cnew_input')['value']);
        document.getElementById(this.parentBlogCategory + '_cnew_input')['value'] = '';
        this.hide_cnew();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BlogcategoryComponent.prototype, "parentBlogCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlogcategoryComponent.prototype, "parent_element", void 0);
    BlogcategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogcategory',
            template: __webpack_require__(/*! ./blogcategory.component.html */ "./src/app/blog/create/blogcategory/blogcategory.component.html"),
            styles: [__webpack_require__(/*! ./blogcategory.component.scss */ "./src/app/blog/create/blogcategory/blogcategory.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blogcategory_service__WEBPACK_IMPORTED_MODULE_2__["BlogcategoryService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BlogcategoryComponent);
    return BlogcategoryComponent;
}());



/***/ }),

/***/ "./src/app/blog/create/blogcategory/blogcategory.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/blog/create/blogcategory/blogcategory.service.ts ***!
  \******************************************************************/
/*! exports provided: BlogcategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogcategoryService", function() { return BlogcategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var BlogcategoryService = /** @class */ (function () {
    function BlogcategoryService(LS) {
        this.LS = LS;
        this.BlogCategories = {};
        this.child_elements = [];
        this.getAllBlogCategories();
    }
    BlogcategoryService.prototype.getAllBlogCategories = function () {
        var _this = this;
        this.LS.http.get(this.LS.serverurl + 'blogs/blogcategory/').subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var x = data_1[_i];
                x.body = JSON.parse(x.body);
                _this.BlogCategories[x.url] = x;
            }
            _this.refresh();
        });
    };
    BlogcategoryService.prototype.refresh = function () {
        for (var _i = 0, _a = this.child_elements; _i < _a.length; _i++) {
            var x = _a[_i];
            x.refresh();
        }
    };
    BlogcategoryService.prototype.addChild = function (x) {
        if (this.child_elements.indexOf(x) == -1) {
            this.child_elements.push(x);
        }
    };
    BlogcategoryService.prototype.create_bc = function (parent_url, name) {
        var _this = this;
        if (parent_url === void 0) { parent_url = ''; }
        if (name === void 0) { name = ''; }
        if (parent_url == 'root' || parent_url == null)
            parent_url = '';
        this.LS.http.post(this.LS.serverurl + 'blogs/blogcategory/', new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("name", name)
            .set("category", parent_url), { headers: this.LS.getHeaders() }).subscribe(function (data) {
            data.body = JSON.parse(data.body);
            _this.BlogCategories[data.url] = data;
            _this.refresh();
            // console.log(data);
        });
    };
    BlogcategoryService.prototype.delete_bc = function (url) {
        var _this = this;
        this.LS.http.delete(url, { headers: this.LS.getHeaders() }).subscribe(function (data) {
            delete _this.BlogCategories[url];
            _this.refresh();
        });
    };
    BlogcategoryService.prototype.update_bc = function (url, name, body) {
        if (body === void 0) { body = null; }
        // making sure to preserve other datas
        console.log(body);
        for (var x in body) {
            // body is a {}
            if (body[x].length == 0)
                continue;
            this.BlogCategories[url].body[x] = body[x];
        }
        var json_body = JSON.stringify(this.BlogCategories[url].body);
        console.log(json_body);
        this.LS.http.patch(url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('name', name).set('body', json_body), {
            headers: this.LS.getHeaders()
        }).subscribe(function (data) {
            console.log(data);
        });
    };
    BlogcategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], BlogcategoryService);
    return BlogcategoryService;
}());



/***/ }),

/***/ "./src/app/blog/create/create.component.html":
/*!***************************************************!*\
  !*** ./src/app/blog/create/create.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\r\n  <div class=\"col\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title text-center\">Create Blog</h5>\r\n        <div class=\"card-body\">\r\n\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text btn btn-primary\">Name of Blog</span>\r\n            </div>\r\n            <input class=\"form-control\" type=\"text\" #blname>\r\n            \r\n          </div><br>\r\n\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text btn btn-primary\">Select category</span>\r\n            </div>\r\n            <p class=\"form-control\" id=\"blc-v\" (click)='show_blog_categories();'></p>\r\n          </div>\r\n          <div class=\"card\" id=\"blc-card\" style=\"display:none;\">\r\n            <ul class=\"list-group\">\r\n              <app-blogcategory [parentBlogCategory]=\"blogCategories\" [parent_element]='this'></app-blogcategory>\r\n            </ul>\r\n          </div><br>\r\n\r\n          <div class=\"form-group\">\r\n              <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <label class=\"input-group-text btn btn-primary\" for=\"createblg_type\">Type</label>\r\n                  </div>\r\n                  <select class=\"custom-select form-control\" #bltype>\r\n                    <option selected>Choose...</option>\r\n                    <option value=\"1\">Interview</option>\r\n                    <option value=\"2\">Course</option>\r\n                    <option value=\"3\">Full page blog</option>\r\n                  </select>\r\n                </div>\r\n          </div>\r\n          <button class=\"btn btn-success\" (click)=\"this.BS.create_blog(blname.value, selected_blc, bltype.value, {});\">Create Blog</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/blog/create/create.component.scss":
/*!***************************************************!*\
  !*** ./src/app/blog/create/create.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group li {\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9jcmVhdGUvQzpcXFVzZXJzXFxNYXlhbmtcXERlc2t0b3BcXE1hbmdvYnl0ZVxcbWFuZ29ieXRlL3NyY1xcYXBwXFxibG9nXFxjcmVhdGVcXGNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwIGxpe1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/blog/create/create.component.ts":
/*!*************************************************!*\
  !*** ./src/app/blog/create/create.component.ts ***!
  \*************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var _blogcategory_blogcategory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogcategory/blogcategory.service */ "./src/app/blog/create/blogcategory/blogcategory.service.ts");




var CreateComponent = /** @class */ (function () {
    function CreateComponent(BS, BCS) {
        this.BS = BS;
        this.BCS = BCS;
        this.blogCategories = 'root';
        this.BCS.addChild(this);
    }
    CreateComponent.prototype.selected_blog_category = function (value) {
        document.getElementById('blc-card').style.display = 'none';
        document.getElementById('blc-v').innerText = value.name;
        this.selected_blc = value.url;
    };
    CreateComponent.prototype.show_blog_categories = function () {
        //console.log('was asked to show')
        document.getElementById('blc-card').style.display = 'block';
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.refresh = function () { };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/blog/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/blog/create/create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _blogcategory_blogcategory_service__WEBPACK_IMPORTED_MODULE_3__["BlogcategoryService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/courses/components/acad/acad.component.html":
/*!*************************************************************!*\
  !*** ./src/app/courses/components/acad/acad.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n    <div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url('./../../assets/images/bg_2.jpg'); background-attachment:fixed;\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\n          <div class=\"col-md-8 ftco-animate text-center\">\n            <p class=\"breadcrumbs\"><span class=\"mr-2\"><a href=\"/home\">Home</a></span> <span>Course</span></p>\n            <h1 class=\"mb-3 bread\">Academia</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <section class=\"ftco-section\">\n    \t<div class=\"container\" style=\"margin-bottom:50px;\">\n          <h3 class=\"mb-3 text-center bread\">Name of catagory</h3><br>\n    \t\t<div class=\"row d-flex\">\n          <div class=\"col-md-4 d-flex ftco-animate\">\n          \t<div class=\"blog-entry align-self-stretch\">\n              <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n              </a>\n              <div class=\"text p-4 d-block\">\n              \t<div class=\"meta mb-3\">\n                  <div><a href=\"#\">August 12, 2018</a></div>\n                  <div><a href=\"#\">Admin</a></div>\n                  <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                </div>\n                <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 d-flex ftco-animate\">\n          \t<div class=\"blog-entry align-self-stretch\">\n              <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n              </a>\n              <div class=\"text p-4 d-block\">\n              \t<div class=\"meta mb-3\">\n                  <div><a href=\"#\">August 12, 2018</a></div>\n                  <div><a href=\"#\">Admin</a></div>\n                  <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                </div>\n                <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 d-flex ftco-animate\">\n          \t<div class=\"blog-entry align-self-stretch\">\n              <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n              </a>\n              <div class=\"text p-4 d-block\">\n              \t<div class=\"meta mb-3\">\n                  <div><a href=\"#\">August 12, 2018</a></div>\n                  <div><a href=\"#\">Admin</a></div>\n                  <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                </div>\n                <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n      </div>\n      <div class=\"container\" style=\"margin-bottom:50px;\">\n          <h3 class=\"mb-3 text-center bread\">Name of catagory</h3><br>\n    \t\t<div class=\"row d-flex\">\n          <div class=\"col-md-4 d-flex ftco-animate\">\n          \t<div class=\"blog-entry align-self-stretch\">\n              <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n              </a>\n              <div class=\"text p-4 d-block\">\n              \t<div class=\"meta mb-3\">\n                  <div><a href=\"#\">August 12, 2018</a></div>\n                  <div><a href=\"#\">Admin</a></div>\n                  <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                </div>\n                <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 d-flex ftco-animate\">\n          \t<div class=\"blog-entry align-self-stretch\">\n              <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n              </a>\n              <div class=\"text p-4 d-block\">\n              \t<div class=\"meta mb-3\">\n                  <div><a href=\"#\">August 12, 2018</a></div>\n                  <div><a href=\"#\">Admin</a></div>\n                  <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                </div>\n                <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 d-flex ftco-animate\">\n          \t<div class=\"blog-entry align-self-stretch\">\n              <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n              </a>\n              <div class=\"text p-4 d-block\">\n              \t<div class=\"meta mb-3\">\n                  <div><a href=\"#\">August 12, 2018</a></div>\n                  <div><a href=\"#\">Admin</a></div>\n                  <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                </div>\n                <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n      </div>\n      <div class=\"container\" style=\"margin-bottom:50px;\">\n          <h3 class=\"mb-3 text-center bread\">Name of catagory</h3><br>\n    \t\t<div class=\"row d-flex\">\n          <div class=\"col-md-4 d-flex ftco-animate\">\n          \t<div class=\"blog-entry align-self-stretch\">\n              <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n              </a>\n              <div class=\"text p-4 d-block\">\n              \t<div class=\"meta mb-3\">\n                  <div><a href=\"#\">August 12, 2018</a></div>\n                  <div><a href=\"#\">Admin</a></div>\n                  <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                </div>\n                <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 d-flex ftco-animate\">\n          \t<div class=\"blog-entry align-self-stretch\">\n              <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n              </a>\n              <div class=\"text p-4 d-block\">\n              \t<div class=\"meta mb-3\">\n                  <div><a href=\"#\">August 12, 2018</a></div>\n                  <div><a href=\"#\">Admin</a></div>\n                  <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                </div>\n                <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 d-flex ftco-animate\">\n          \t<div class=\"blog-entry align-self-stretch\">\n              <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n              </a>\n              <div class=\"text p-4 d-block\">\n              \t<div class=\"meta mb-3\">\n                  <div><a href=\"#\">August 12, 2018</a></div>\n                  <div><a href=\"#\">Admin</a></div>\n                  <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                </div>\n                <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n      </div>\n    </section>\n\t\t\n\t\t<section class=\"ftco-section-parallax\">\n      <div class=\"parallax-img d-flex align-items-center\">\n        <div class=\"container\">\n          <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-md-7 text-center heading-section heading-section-white ftco-animate\">\n              <h2>Subcribe to our Newsletter</h2>\n              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\n              <div class=\"row d-flex justify-content-center mt-5\">\n                <div class=\"col-md-8\">\n                  <form action=\"#\" class=\"subscribe-form\">\n                    <div class=\"form-group d-flex\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter email address\">\n                      <input type=\"submit\" value=\"Subscribe\" class=\"submit px-3\">\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n"

/***/ }),

/***/ "./src/app/courses/components/acad/acad.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/courses/components/acad/acad.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY29tcG9uZW50cy9hY2FkL2FjYWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/courses/components/acad/acad.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/courses/components/acad/acad.component.ts ***!
  \***********************************************************/
/*! exports provided: AcadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcadComponent", function() { return AcadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AcadComponent = /** @class */ (function () {
    function AcadComponent() {
    }
    AcadComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../../../assets/js/main.js');
    };
    AcadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-acad',
            template: __webpack_require__(/*! ./acad.component.html */ "./src/app/courses/components/acad/acad.component.html"),
            styles: [__webpack_require__(/*! ./acad.component.scss */ "./src/app/courses/components/acad/acad.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AcadComponent);
    return AcadComponent;
}());



/***/ }),

/***/ "./src/app/courses/components/blogdetails/blogdetails.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/courses/components/blogdetails/blogdetails.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url(' ../assets/images/bg_2.jpg'); background-attachment:fixed;\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\r\n      <div class=\"col-md-8 ftco-animate text-center\">\r\n        <h1 class=\"mb-3 bread\">Blog Details</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<section class=\"ftco-section\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n          <ng-container>\r\n              <ng-container *ngIf=\"LS.islogged && LS.is_staff\">\r\n                <button class=\"btn btn-primary\" type=\"button\" *ngIf=\"!editable\" (click)=\"edit()\"><i class=\"fas fa-edit\"></i> Edit</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" *ngIf=\"editable\" (click)=\"update()\"><i class=\"fas fa-save\"></i>Update Editor with previos value</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" *ngIf=\"editable\" (click)=\"get()\"><i class=\"fas fa-save\"></i>Get value from editor</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" *ngIf=\"editable\" (click)=\"close()\"><i class=\"fas fa-save\"></i>Close editor</button>\r\n                <button class=\"btn btn-primary\" type=\"button\" *ngIf=\"editable\" (click)=\"save()\"><i class=\"fas fa-save\"></i> Save</button>\r\n              </ng-container>\r\n              <div id=\"blog-container\">\r\n                <!-- Blog goes here -->\r\n              </div>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"editable\">\r\n              <iframe id=\"editor\" src=\"/assets/keditor/basic_with_blank_content.html\"></iframe>\r\n            </ng-container>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n<app-comment [blog_id]='id' [blog]='this.blog'></app-comment>"

/***/ }),

/***/ "./src/app/courses/components/blogdetails/blogdetails.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/courses/components/blogdetails/blogdetails.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#editor {\n  width: 100%;\n  min-height: 500px; }\n\n#blog-container {\n  width: 100%;\n  padding: 20px;\n  overflow-x: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy9jb21wb25lbnRzL2Jsb2dkZXRhaWxzL0M6XFxVc2Vyc1xcTWF5YW5rXFxEZXNrdG9wXFxNYW5nb2J5dGVcXG1hbmdvYnl0ZS9zcmNcXGFwcFxcY291cnNlc1xcY29tcG9uZW50c1xcYmxvZ2RldGFpbHNcXGJsb2dkZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxjQUFZO0VBQ1osbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY291cnNlcy9jb21wb25lbnRzL2Jsb2dkZXRhaWxzL2Jsb2dkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2VkaXRvcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuI2Jsb2ctY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/courses/components/blogdetails/blogdetails.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/courses/components/blogdetails/blogdetails.component.ts ***!
  \*************************************************************************/
/*! exports provided: BlogdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogdetailsComponent", function() { return BlogdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/blog/blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var BlogdetailsComponent = /** @class */ (function () {
    function BlogdetailsComponent(BS, BLS, LS) {
        this.BS = BS;
        this.BLS = BLS;
        this.LS = LS;
        this.blog = null;
        this.editable = false;
        this.BS.addChild(this);
        BLS.addChild(this);
    }
    BlogdetailsComponent.prototype.ngOnInit = function () {
    };
    BlogdetailsComponent.prototype.refresh = function () {
        var _this = this;
        var id = this.LS.serverurl + 'blogs/blog/' + this.id + '/';
        this.blog = this.BS.Blogs[id];
        console.log("refresh blogdetails was called!", this.blog);
        // if blog doesn't have body, request it from server
        if (!('body' in this.blog)) {
            this.BLS.getBlog(this.blog.url).subscribe(function (data) {
                _this.blog = data;
                console.log("Blog retrived from server", _this.blog);
            });
        }
        this.fill_blog();
    };
    BlogdetailsComponent.prototype.fill_blog = function () {
        document.getElementById("blog-container").innerHTML = this.blog.body;
    };
    BlogdetailsComponent.prototype.update_blog = function (body) {
    };
    BlogdetailsComponent.prototype.edit = function () {
        this.editable = true;
    };
    BlogdetailsComponent.prototype.update = function () {
        document.getElementById('editor')['contentWindow']['$']('#content-area').keditor('setContent', this.blog.body);
    };
    BlogdetailsComponent.prototype.get = function () {
        var data = document.getElementById('editor')['contentWindow']['$']('#content-area').keditor('getContent');
        console.log(data);
        this.blog.body = data;
        this.fill_blog();
    };
    BlogdetailsComponent.prototype.close = function () {
        document.getElementById('editor')['src'] = '';
    };
    BlogdetailsComponent.prototype.save = function () {
        this.editable = false;
        this.LS.http.patch(this.blog.url, new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('body', this.blog.body).set("param1", "just kidding"), {
            headers: this.LS.getHeaders().set("Content-Type", "multipart/form-data")
        }).subscribe(function (data) {
            alert("Blog saved, reload to verify!");
        });
    };
    BlogdetailsComponent.prototype.get_id_from_url = function (url) {
        return url.split("/")[5];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlogdetailsComponent.prototype, "id", void 0);
    BlogdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogdetails',
            template: __webpack_require__(/*! ./blogdetails.component.html */ "./src/app/courses/components/blogdetails/blogdetails.component.html"),
            styles: [__webpack_require__(/*! ./blogdetails.component.scss */ "./src/app/courses/components/blogdetails/blogdetails.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], src_app_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], src_app_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], BlogdetailsComponent);
    return BlogdetailsComponent;
}());



/***/ }),

/***/ "./src/app/courses/components/blogdetails/comment/comment.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/courses/components/blogdetails/comment/comment.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><div class=\"container\">\r\n        <ng-container *ngIf=\"position=='' || true\">\r\n                <!-- To be shown only if the comment is root comment -->\r\n                <ng-container *ngIf=\"LS.islogged\">\r\n                    <!-- To be shown only if the user is logged -->\r\n                    <div class=\"card\" style=\"border-radius:10px;\">\r\n                        <div class=\"card-header\"> \r\n                            <div class=\"input-group row\" >\r\n                                    <div class=\"input-group-prepend col-sm-2\">\r\n                                        <img src=\"{{LS.data.user.info.picture}}\" class=\"profile-pic\">\r\n                                    </div>\r\n                                    <input #message class=\"form-control col-sm-10\" type=\"text\">\r\n                                    <div class=\"input-group-append\">\r\n                                        <button class=\"btn btn-success\" type=\"button\" (click)=\"\r\n                                            CS.comment(message.value, blog.url, '')\r\n                                        \">Comment</button>\r\n                                    </div>\r\n                                </div>\r\n                        </div>\r\n                    </div><br>\r\n                </ng-container>\r\n                <h3 class=\"text-center\"> Previous Comments</h3><br>\r\n                <ng-container *ngIf=\"this.comments!=null\">\r\n                    <ng-container *ngFor=\"let x of this.comments|keyvalue\">\r\n                        <div class=\"card\" style=\"border-radius:10px;\">\r\n                            <div class=\"card-header\"> \r\n                                <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <img src=\"{{x.value.user.info.picture}}\" class=\"profile-pic\">\r\n                                        </div>\r\n                                        <div class=\"card-body\" style=\"background:white;color:black;padding:10px;margin:4px;border-radius:8px;\">{{x.value.comment.message}}</div>\r\n                                    </div>\r\n                            </div>\r\n                        </div><br>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </ng-container><br><br>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/courses/components/blogdetails/comment/comment.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/courses/components/blogdetails/comment/comment.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".commentdiv {\n  display: none;\n  z-index: 3;\n  position: fixed;\n  top: 10px;\n  bottom: 10px;\n  left: 10px;\n  right: 10px;\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291cnNlcy9jb21wb25lbnRzL2Jsb2dkZXRhaWxzL2NvbW1lbnQvQzpcXFVzZXJzXFxNYXlhbmtcXERlc2t0b3BcXE1hbmdvYnl0ZVxcbWFuZ29ieXRlL3NyY1xcYXBwXFxjb3Vyc2VzXFxjb21wb25lbnRzXFxibG9nZGV0YWlsc1xcY29tbWVudFxcY29tbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFBQyxXQUFTO0VBQUMsZ0JBQWM7RUFBRSxVQUFRO0VBQUUsYUFBVztFQUFFLFdBQVM7RUFBQyxZQUFVO0VBQUUsV0FBUyxFQUM3RiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY29tcG9uZW50cy9ibG9nZGV0YWlscy9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudGRpdntcclxuICAgIGRpc3BsYXk6IG5vbmU7ei1pbmRleDozO3Bvc2l0aW9uOmZpeGVkOyB0b3A6MTBweDsgYm90dG9tOjEwcHg7IGxlZnQ6MTBweDtyaWdodDoxMHB4OyBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/courses/components/blogdetails/comment/comment.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/courses/components/blogdetails/comment/comment.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.service */ "./src/app/courses/components/blogdetails/comment/comment.service.ts");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");




var CommentComponent = /** @class */ (function () {
    function CommentComponent(LS, CS, cdr) {
        this.LS = LS;
        this.CS = CS;
        this.cdr = cdr;
        this.position = '';
        this.commentor_list = {};
        this.comments = null;
        this.LS.addChild(this);
        this.CS.addChild(this);
    }
    CommentComponent.prototype.ngOnInit = function () {
        //console.log(this.comments);
        this.refresh();
    };
    CommentComponent.prototype.hidecomment = function () {
        document.getElementById("comment123").style.display = "none";
        console.log("comment hidden");
    };
    CommentComponent.prototype.showcomment = function () {
        document.getElementById("comment123").style.display = "block";
        console.log("comment shown");
    };
    CommentComponent.prototype.refresh = function () {
        var _this = this;
        this.cdr.detectChanges();
        this.CS.get_comments(this.blog_id).subscribe(function (data) {
            //console.log(data)
            _this.comments = {};
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var x = data_1[_i];
                //console.log(x.comment.message, x.user.info)
                try {
                    x.user.info = JSON.parse(x.user.info);
                }
                catch (e) {
                    alert("Error in parsing json at comment at line 28 :" + e);
                }
                _this.comments[x.comment.url] = x;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentComponent.prototype, "blog_id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentComponent.prototype, "blog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CommentComponent.prototype, "position", void 0);
    CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/courses/components/blogdetails/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/courses/components/blogdetails/comment/comment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/courses/components/blogdetails/comment/comment.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/courses/components/blogdetails/comment/comment.service.ts ***!
  \***************************************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CommentService = /** @class */ (function () {
    function CommentService(LS) {
        this.LS = LS;
        this.child_elements = [];
    }
    CommentService.prototype.comment = function (message, blog_url, parent_comment_url) {
        var _this = this;
        this.LS.http.post(this.LS.serverurl + 'blogs/comments/', new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('message', message)
            .set('blog', blog_url)
            .set('parent', parent_comment_url), {
            headers: this.LS.getHeaders()
        }).subscribe(function (data) {
            _this.refresh();
        });
    };
    CommentService.prototype.get_comments = function (blog_id) {
        return this.LS.http.get(this.LS.serverurl + 'blogs/comments/?blog=' + blog_id, {
            headers: this.LS.getHeaders()
        });
    };
    CommentService.prototype.refresh = function () {
        for (var x in this.child_elements) {
            this.child_elements[x].refresh();
        }
    };
    CommentService.prototype.addChild = function (x) {
        if (this.child_elements.indexOf(x) == -1) {
            this.child_elements.push(x);
        }
    };
    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/courses/components/corporate/corporate.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/courses/components/corporate/corporate.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n    <div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url('./../../assets/images/bg_2.jpg'); background-attachment:fixed;\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\n          <div class=\"col-md-8 ftco-animate text-center\">\n            <p class=\"breadcrumbs\"><span class=\"mr-2\"><a href=\"/home\">Home</a></span> <span>Course</span></p>\n            <h1 class=\"mb-3 bread\">Corporate Sector</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <section class=\"ftco-section\">\n        <div class=\"container\" style=\"margin-bottom:50px;\">\n            <h3 class=\"mb-3 text-center bread\">Consulting</h3><br>\n          <div class=\"row d-flex\">\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n        </div>\n        <div class=\"container\" style=\"margin-bottom:50px;\">\n            <h3 class=\"mb-3 text-center bread\">Finance</h3><br>\n          <div class=\"row d-flex\">\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n        </div>\n        <div class=\"container\" style=\"margin-bottom:50px;\">\n            <h3 class=\"mb-3 text-center bread\">Analytics</h3><br>\n          <div class=\"row d-flex\">\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n        </div>\n      </section>\n      \n\t\t\n\t\t<section class=\"ftco-section-parallax\">\n      <div class=\"parallax-img d-flex align-items-center\">\n        <div class=\"container\">\n          <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-md-7 text-center heading-section heading-section-white ftco-animate\">\n              <h2>Subcribe to our Newsletter</h2>\n              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\n              <div class=\"row d-flex justify-content-center mt-5\">\n                <div class=\"col-md-8\">\n                  <form action=\"#\" class=\"subscribe-form\">\n                    <div class=\"form-group d-flex\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter email address\">\n                      <input type=\"submit\" value=\"Subscribe\" class=\"submit px-3\">\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n"

/***/ }),

/***/ "./src/app/courses/components/corporate/corporate.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/courses/components/corporate/corporate.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY29tcG9uZW50cy9jb3Jwb3JhdGUvY29ycG9yYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/courses/components/corporate/corporate.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/courses/components/corporate/corporate.component.ts ***!
  \*********************************************************************/
/*! exports provided: CorporateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateComponent", function() { return CorporateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CorporateComponent = /** @class */ (function () {
    function CorporateComponent() {
    }
    CorporateComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../../../assets/js/main.js');
    };
    CorporateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-corporate',
            template: __webpack_require__(/*! ./corporate.component.html */ "./src/app/courses/components/corporate/corporate.component.html"),
            styles: [__webpack_require__(/*! ./corporate.component.scss */ "./src/app/courses/components/corporate/corporate.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CorporateComponent);
    return CorporateComponent;
}());



/***/ }),

/***/ "./src/app/courses/components/entrepr/entrepr.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/courses/components/entrepr/entrepr.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n    <div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url('./../../assets/images/bg_2.jpg'); background-attachment:fixed;\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\n          <div class=\"col-md-8 ftco-animate text-center\">\n            <p class=\"breadcrumbs\"><span class=\"mr-2\"><a href=\"/home\">Home</a></span> <span>Course</span></p>\n            <h1 class=\"mb-3 bread\">Entrepreneurship</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <section class=\"ftco-section\">\n        <div class=\"container\" style=\"margin-bottom:50px;\">\n            <h3 class=\"mb-3 text-center bread\">Name of catagory</h3><br>\n          <div class=\"row d-flex\">\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n        </div>\n        <div class=\"container\" style=\"margin-bottom:50px;\">\n            <h3 class=\"mb-3 text-center bread\">Name of catagory</h3><br>\n          <div class=\"row d-flex\">\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n        </div>\n        <div class=\"container\" style=\"margin-bottom:50px;\">\n            <h3 class=\"mb-3 text-center bread\">Name of catagory</h3><br>\n          <div class=\"row d-flex\">\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n        </div>\n      </section>\n      \n\t\t\n\t\t<section class=\"ftco-section-parallax\">\n      <div class=\"parallax-img d-flex align-items-center\">\n        <div class=\"container\">\n          <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-md-7 text-center heading-section heading-section-white ftco-animate\">\n              <h2>Subcribe to our Newsletter</h2>\n              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\n              <div class=\"row d-flex justify-content-center mt-5\">\n                <div class=\"col-md-8\">\n                  <form action=\"#\" class=\"subscribe-form\">\n                    <div class=\"form-group d-flex\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter email address\">\n                      <input type=\"submit\" value=\"Subscribe\" class=\"submit px-3\">\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n"

/***/ }),

/***/ "./src/app/courses/components/entrepr/entrepr.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/courses/components/entrepr/entrepr.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY29tcG9uZW50cy9lbnRyZXByL2VudHJlcHIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/courses/components/entrepr/entrepr.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/courses/components/entrepr/entrepr.component.ts ***!
  \*****************************************************************/
/*! exports provided: EntreprComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntreprComponent", function() { return EntreprComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EntreprComponent = /** @class */ (function () {
    function EntreprComponent() {
    }
    EntreprComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../../../assets/js/main.js');
    };
    EntreprComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entrepr',
            template: __webpack_require__(/*! ./entrepr.component.html */ "./src/app/courses/components/entrepr/entrepr.component.html"),
            styles: [__webpack_require__(/*! ./entrepr.component.scss */ "./src/app/courses/components/entrepr/entrepr.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EntreprComponent);
    return EntreprComponent;
}());



/***/ }),

/***/ "./src/app/courses/components/politics/politics.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/courses/components/politics/politics.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n    <div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url('./../../assets/images/bg_2.jpg'); background-attachment:fixed;\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\n          <div class=\"col-md-8 ftco-animate text-center\">\n            <p class=\"breadcrumbs\"><span class=\"mr-2\"><a href=\"/home\">Home</a></span> <span>Politics</span></p>\n            <h1 class=\"mb-3 bread\">Politics</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section class=\"ftco-section\">\n        <div class=\"container\" style=\"margin-bottom:50px;\">\n            <h3 class=\"mb-3 text-center bread\">Name of catagory</h3><br>\n          <div class=\"row d-flex\">\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n        </div>\n        <div class=\"container\" style=\"margin-bottom:50px;\">\n            <h3 class=\"mb-3 text-center bread\">Name of catagory</h3><br>\n          <div class=\"row d-flex\">\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n        </div>\n        <div class=\"container\" style=\"margin-bottom:50px;\">\n            <h3 class=\"mb-3 text-center bread\">Name of catagory</h3><br>\n          <div class=\"row d-flex\">\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n        </div>\n      </section>\n      \n\t\t<section class=\"ftco-section-parallax\">\n      <div class=\"parallax-img d-flex align-items-center\">\n        <div class=\"container\">\n          <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-md-7 text-center heading-section heading-section-white ftco-animate\">\n              <h2>Subcribe to our Newsletter</h2>\n              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\n              <div class=\"row d-flex justify-content-center mt-5\">\n                <div class=\"col-md-8\">\n                  <form action=\"#\" class=\"subscribe-form\">\n                    <div class=\"form-group d-flex\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter email address\">\n                      <input type=\"submit\" value=\"Subscribe\" class=\"submit px-3\">\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n"

/***/ }),

/***/ "./src/app/courses/components/politics/politics.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/courses/components/politics/politics.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY29tcG9uZW50cy9wb2xpdGljcy9wb2xpdGljcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/courses/components/politics/politics.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/courses/components/politics/politics.component.ts ***!
  \*******************************************************************/
/*! exports provided: PoliticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliticsComponent", function() { return PoliticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PoliticsComponent = /** @class */ (function () {
    function PoliticsComponent() {
    }
    PoliticsComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../../../assets/js/main.js');
    };
    PoliticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-politics',
            template: __webpack_require__(/*! ./politics.component.html */ "./src/app/courses/components/politics/politics.component.html"),
            styles: [__webpack_require__(/*! ./politics.component.scss */ "./src/app/courses/components/politics/politics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PoliticsComponent);
    return PoliticsComponent;
}());



/***/ }),

/***/ "./src/app/courses/components/public/public.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/courses/components/public/public.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n    <div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url('./../../assets/images/bg_2.jpg'); background-attachment:fixed;\">\n      <div class=\"overlay\"></div>\n      <div class=\"container\">\n        <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\n          <div class=\"col-md-8 ftco-animate text-center\">\n            <p class=\"breadcrumbs\"><span class=\"mr-2\"><a href=\"/home\">Home</a></span> <span>Course</span></p>\n            <h1 class=\"mb-3 bread\">Public Sector</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <section class=\"ftco-section\">\n        <div class=\"container\" style=\"margin-bottom:50px;\">\n            <h3 class=\"mb-3 text-center bread\">Name of catagory</h3><br>\n          <div class=\"row d-flex\">\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n        </div>\n        <div class=\"container\" style=\"margin-bottom:50px;\">\n            <h3 class=\"mb-3 text-center bread\">Name of catagory</h3><br>\n          <div class=\"row d-flex\">\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n        </div>\n        <div class=\"container\" style=\"margin-bottom:50px;\">\n            <h3 class=\"mb-3 text-center bread\">Name of catagory</h3><br>\n          <div class=\"row d-flex\">\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_4.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_5.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4 d-flex ftco-animate\">\n              <div class=\"blog-entry align-self-stretch\">\n                <a href=\"/courses/blogdetails\" class=\"block-20\" style=\"background-image: url('../../../assets/images/image_6.jpg');\">\n                </a>\n                <div class=\"text p-4 d-block\">\n                  <div class=\"meta mb-3\">\n                    <div><a href=\"#\">August 12, 2018</a></div>\n                    <div><a href=\"#\">Admin</a></div>\n                    <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\n                  </div>\n                  <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\n                  <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary\" style=\"margin-left:42%;\" >View more Interviews</button>\n        </div>\n      </section>\n      \n\t\t<section class=\"ftco-section-parallax\">\n      <div class=\"parallax-img d-flex align-items-center\">\n        <div class=\"container\">\n          <div class=\"row d-flex justify-content-center\">\n            <div class=\"col-md-7 text-center heading-section heading-section-white ftco-animate\">\n              <h2>Subcribe to our Newsletter</h2>\n              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\n              <div class=\"row d-flex justify-content-center mt-5\">\n                <div class=\"col-md-8\">\n                  <form action=\"#\" class=\"subscribe-form\">\n                    <div class=\"form-group d-flex\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Enter email address\">\n                      <input type=\"submit\" value=\"Subscribe\" class=\"submit px-3\">\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n"

/***/ }),

/***/ "./src/app/courses/components/public/public.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/courses/components/public/public.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY29tcG9uZW50cy9wdWJsaWMvcHVibGljLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/courses/components/public/public.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/courses/components/public/public.component.ts ***!
  \***************************************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PublicComponent = /** @class */ (function () {
    function PublicComponent() {
    }
    PublicComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../../../assets/js/main.js');
    };
    PublicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public',
            template: __webpack_require__(/*! ./public.component.html */ "./src/app/courses/components/public/public.component.html"),
            styles: [__webpack_require__(/*! ./public.component.scss */ "./src/app/courses/components/public/public.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "./src/app/courses/courses.component.html":
/*!************************************************!*\
  !*** ./src/app/courses/courses.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/courses/courses.component.scss":
/*!************************************************!*\
  !*** ./src/app/courses/courses.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY291cnNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CoursesComponent = /** @class */ (function () {
    function CoursesComponent() {
    }
    CoursesComponent.prototype.ngOnInit = function () {
    };
    CoursesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.scss */ "./src/app/courses/courses.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/cour/cour.component.html":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/components/cour/cour.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-12\">\n    <div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n         <a href=\"#exampleModalCenter\"data-toggle=\"modal\" data-target=\"#exampleModalCenter\"><h5 class=\"card-title\">Add Courses <i class=\"fas fa-pencil-alt\"></i></h5></a> \n          \n        </div>\n      </div>\n</div>\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Add Courses</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Course name</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n            </div>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"basic-addon3\">Image Url</span>\n              </div>\n              <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\">\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"basic-addon3\">Reference Url</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\">\n              </div>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Description</span>\n                </div>\n                <textarea class=\"form-control\" aria-label=\"With textarea\"></textarea>\n              </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\">Submit</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/components/cour/cour.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/components/cour/cour.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2NvdXIvY291ci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/cour/cour.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/components/cour/cour.component.ts ***!
  \*************************************************************/
/*! exports provided: CourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourComponent", function() { return CourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CourComponent = /** @class */ (function () {
    function CourComponent() {
    }
    CourComponent.prototype.ngOnInit = function () {
    };
    CourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cour',
            template: __webpack_require__(/*! ./cour.component.html */ "./src/app/dashboard/components/cour/cour.component.html"),
            styles: [__webpack_require__(/*! ./cour.component.scss */ "./src/app/dashboard/components/cour/cour.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CourComponent);
    return CourComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/interv/interv.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/components/interv/interv.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-12\">\n    <div class=\"card\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n         <a href=\"#exampleModalCenter\"data-toggle=\"modal\" data-target=\"#exampleModalCenter\"><h5 class=\"card-title\">Add Interviews <i class=\"fas fa-pencil-alt\"></i></h5></a> \n          \n        </div>\n      </div>\n</div>\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Add Interview</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\"> \n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"inputGroup-sizing-default\">Heading</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" aria-label=\"Sizing example input\" aria-describedby=\"inputGroup-sizing-default\">\n            </div>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"basic-addon3\">Image Url</span>\n              </div>\n              <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\">\n            </div>\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\" id=\"basic-addon3\">Youtube Video Url</span>\n                </div>\n                <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\">\n              </div>\n            <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">Description</span>\n                </div>\n                <textarea class=\"form-control\" aria-label=\"With textarea\"></textarea>\n              </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\">Submit</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/components/interv/interv.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/components/interv/interv.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2ludGVydi9pbnRlcnYuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/interv/interv.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/components/interv/interv.component.ts ***!
  \*****************************************************************/
/*! exports provided: IntervComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntervComponent", function() { return IntervComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IntervComponent = /** @class */ (function () {
    function IntervComponent() {
    }
    IntervComponent.prototype.ngOnInit = function () {
    };
    IntervComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interv',
            template: __webpack_require__(/*! ./interv.component.html */ "./src/app/dashboard/components/interv/interv.component.html"),
            styles: [__webpack_require__(/*! ./interv.component.scss */ "./src/app/dashboard/components/interv/interv.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntervComponent);
    return IntervComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"LS.islogged\">\r\n\r\n\r\n    <div class=\"sidebar\">\r\n        <a style=\"background:#fc4b6c;color:white;\"><img class=\"account-image-small\" src=\"{{LS.data.user.info.picture}}\">\r\n            {{this.LS.data.user.info.name}}</a>\r\n        <ng-container *ngFor=\"let nav of nav_list\">\r\n            <a href=\"javascript:void(0)\" [ngClass]=\"{'active':nav_selected==nav[0]}\" (click)=\"updatenav(nav);\">\r\n\r\n                <i class=\"fas fa-{{ nav[1] }}\"></i>\r\n                {{ nav[0] }}\r\n            </a>\r\n        </ng-container>\r\n    </div>\r\n    <div class=\"content\">\r\n        <div class=\"row page-titles\">\r\n            <div class=\"col-md-5 col-8 align-self-center\">\r\n                <h3 class=\"text-themecolor\">Welcome to Dashboard</h3>\r\n            </div>\r\n            <div class=\"col-md-7 col-4 align-self-center\">\r\n                <a style=\"border-radius:4px;background:#fc4b6c;color:white;float:right;\" class=\"btn waves-effect waves-light btn-danger pull-right hidden-sm-down\"\r\n                    href=\"/\"><i class=\"fa fa-reply\" aria-hidden=\"true\"></i>Website</a>\r\n            </div>\r\n        </div>\r\n        <ng-container *ngIf=\"nav_selected=='Create Blog'\">\r\n            <app-create></app-create>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"nav_selected=='Edit a blog category'\">\r\n            <div class=\"card\" id=\"blc-card\">\r\n                <ul class=\"list-group\">\r\n                    <app-blogcategory [parentBlogCategory]=\"'root'\" [parent_element]='this'></app-blogcategory>\r\n                </ul>\r\n            </div>\r\n            <ng-container *ngIf=\"selected_blc!=null\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"\">\r\n                            <div class=\"course align-self-stretch\">\r\n                                <img class=\"img\" id=\"bce_image_prev\" src=\"{{this.BCS.BlogCategories[selected_blc].body.image}}\">\r\n                                <div class=\"text p-4\">\r\n                                        <div class=\"form-group\">\r\n                                                <label for=#bcetitle>Image Url : use assets\\images\\course-n.jpg for default where n is in [1,6]</label>\r\n                                                <input #bceimage class=\"form-control\" type=\"text\" value=\"{{this.BCS.BlogCategories[selected_blc].body.image}}\">\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=#bcetitle>Name</label>\r\n                                            <input #bcename class=\"form-control\" type=\"text\" value=\"{{this.BCS.BlogCategories[selected_blc].name}}\">\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <label for=#bcetitle>Title</label>\r\n                                            <input #bcetitle class=\"form-control\" type=\"text\" value=\"{{this.BCS.BlogCategories[selected_blc].body.title}}\">\r\n                                        </div>\r\n                                    <div class=\"form-group\">\r\n                                        <label for=#bcedisc>Disc</label>\r\n                                        <textarea #bcedisc id=\"my-input\" class=\"form-control\" rows=\"3\">{{this.BCS.BlogCategories[selected_blc].body.disc }}</textarea>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <button class=\"btn btn-success\" (click)=\"BCS.update_bc(selected_blc, bcename.value, {'image':bceimage.value, 'title':bcetitle.value, 'disc':bcedisc.value})\">Update</button>\r\n                        <button class=\"btn btn-danger\" (click)=\"BCS.delete_bc(selected_blc); selected_blc=null;\">Delete</button>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"nav_selected=='Courses'\">\r\n            <app-cour></app-cour>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"nav_selected=='Home'\">\r\n\r\n            <nav>\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item active\">New Features</li>\r\n                </ol>\r\n                <div class=\"accordion\" id=\"accordionExample\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\" id=\"headingOne\">\r\n                            <h5 class=\"mb-0\">\r\n                                <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n                                    aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                                    Category\r\n                                </button>\r\n                            </h5>\r\n                        </div>\r\n\r\n                        <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n                            <div class=\"card-body\">\r\n                                <ul>\r\n                                    <li>To create from either 'Create blog', or 'Edit a category', select a dropdown\r\n                                        list and click on green '+' icon</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\" id=\"headingTwo\">\r\n                            <h5 class=\"mb-0\">\r\n                                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n                                    aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                                    Blogs\r\n                                </button>\r\n                            </h5>\r\n                        </div>\r\n                        <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n                            <div class=\"card-body\">\r\n                                Blogs can be created at any level in category, except the root, but make sure to follow\r\n                                the following procedure,\r\n                                <ul>\r\n                                    <li>In case of interviews, create blog only after 2nd level i.e.\r\n                                        Interviews>Acedemia>Misslineous>Your_blog</li>\r\n                                    <li>In case of courses too, create blog only after 2nd level i.e.\r\n                                        Courses>Acedemia>Misslineous>Your_blog</li>\r\n                                    <li>For editing make sure you are logged in, then a pen icon will be shown with red\r\n                                        background, click on it then edit as u like</li>\r\n                                    <li>In case you just want to create category under some catagory of\r\n                                        Interview/Courses i.e the third level under which certain courses or interview\r\n                                        shall appear. <br> Follow the same procedure to create catagory now go to edit\r\n                                        a blog and select the category you created below you shall see a preview of the\r\n                                        same delete the title and descrption of that catagory and tha's it you created\r\n                                        a catagory name.</li>\r\n                                </ul>\r\n                                Make Sure to :\r\n                                <ul>\r\n                                    <li>Choose type interviews for video</li>\r\n                                    <li>Type courses for image background</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\" id=\"headingThree\">\r\n                            <h5 class=\"mb-0\">\r\n                                <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\"\r\n                                    aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                                    Bugs to be removed:\r\n                                </button>\r\n                            </h5>\r\n                        </div>\r\n                        <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n                            <div class=\"card-body\">\r\n                                <ul>\r\n                                    <li>Server side authentication</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </nav>\r\n\r\n\r\n\r\n            <nav>\r\n                <ol class=\"breadcrumb\">\r\n                    <li class=\"breadcrumb-item active\">Note</li>\r\n                    <li>\r\n                        If you run the website for the first time after a min gap of 30 min,\r\n                        The website will take time to load of around 10-15 sec from server side. This is because of\r\n                        using free dyno. Also the dyno has a fixed uptime limit for a month, we recommend to purchase\r\n                        community/hobby dyno for production purpose, or the site may go down.\r\n                    </li>\r\n                </ol>\r\n            </nav>\r\n\r\n\r\n        </ng-container>\r\n    </div>\r\n</ng-container>\r\n<div class=\"card\" *ngIf=\"!LS.islogged\">\r\n    <div class=\"card-header\">\r\n        Login Required\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Only authorized persons can proceed further</h5>\r\n        <p class=\"card-text\">\r\n            This area is for website admins only, if you are an admin please login with the provided\r\n            username and password below\r\n        </p>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <div class=\"btn\">\r\n            <app-account [show]=\"'dashboard'\"></app-account>\r\n        </div>\r\n        <a class=\"btn btn-dark\" href=\"/\">Website</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-image-small {\n  width: 40px;\n  border-radius: 50%; }\n\n.sidebar {\n  margin: 0;\n  padding: 0;\n  width: 200px;\n  background-color: #fff;\n  position: fixed;\n  min-height: 1000px;\n  overflow: auto; }\n\n.sidebar a {\n  display: block;\n  color: #455a64;\n  padding: 16px;\n  text-decoration: none; }\n\n.sidebar a.active {\n  background-color: #26c6da;\n  color: white; }\n\n.sidebar a:hover:not(.active) {\n  color: #009efb; }\n\ndiv.content {\n  background: #eef5f9;\n  margin-left: 200px;\n  padding: 1px 16px;\n  min-height: 1000px; }\n\n@media screen and (max-width: 700px) {\n  .sidebar {\n    width: 100%;\n    height: auto;\n    position: relative;\n    min-height: 0px; }\n  .sidebar a {\n    float: left; }\n  div.content {\n    margin-left: 0; } }\n\n@media screen and (max-width: 400px) {\n  .sidebar a {\n    text-align: center;\n    float: none; } }\n\n.page-titles {\n  background: #fff;\n  margin: 0 -15px 30px;\n  padding: 5px;\n  box-shadow: 1px 0 5px rgba(0, 0, 0, 0.1); }\n\n.page-titles h3 {\n    margin-bottom: 0px;\n    margin-top: 8px; }\n\n.page-titles .breadcrumb {\n    padding: 0px;\n    color: #a6b7bf;\n    background: transparent;\n    font-size: 12px; }\n\n.page-titles .breadcrumb li {\n      margin-top: 0px;\n      margin-bottom: 0px; }\n\n.page-titles .breadcrumb .breadcrumb-item + .breadcrumb-item::before {\n      content: \"\\e649\";\n      font-family: themify;\n      color: #a6b7bf;\n      font-size: 11px; }\n\n.page-titles .breadcrumb .breadcrumb-item.active {\n      color: #99abb4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcTWF5YW5rXFxEZXNrdG9wXFxNYW5nb2J5dGVcXG1hbmdvYnl0ZS9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXO0VBQ1gsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0ksVUFBUztFQUNULFdBQVU7RUFDVixhQUFZO0VBQ1osdUJBQXNCO0VBQ3RCLGdCQUFlO0VBQ2YsbUJBQWtCO0VBQ2xCLGVBQWMsRUFDZjs7QUFFRDtFQUNFLGVBQWM7RUFDZCxlQUFjO0VBQ2QsY0FBYTtFQUNiLHNCQUFxQixFQUN0Qjs7QUFFRDtFQUNFLDBCQUF3QjtFQUN4QixhQUFZLEVBQ2I7O0FBRUQ7RUFFRSxlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLGtCQUFpQjtFQUNqQixtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRTtJQUNFLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCO0lBQ2xCLGdCQUFlLEVBQ2hCO0VBQ0Q7SUFBWSxZQUFXLEVBQUc7RUFDMUI7SUFBYSxlQUFjLEVBQUcsRUFBQTs7QUFHaEM7RUFDRTtJQUNFLG1CQUFrQjtJQUNsQixZQUFXLEVBQ1osRUFBQTs7QUFHSDtFQUNFLGlCQUFnQjtFQUNoQixxQkFBb0I7RUFDcEIsYUFBWTtFQUNaLHlDQUF3QyxFQXdCM0M7O0FBNUJDO0lBTU0sbUJBQWtCO0lBQ2xCLGdCQUFlLEVBQ2xCOztBQVJIO0lBVU0sYUFBWTtJQUNaLGVBQWE7SUFDYix3QkFBdUI7SUFDdkIsZ0JBQWUsRUFjbEI7O0FBM0JIO01BZVUsZ0JBQWU7TUFDZixtQkFBa0IsRUFDckI7O0FBakJQO01BbUJVLGlCQUFnQjtNQUNoQixxQkFBb0I7TUFDcEIsZUFBYztNQUNkLGdCQUFlLEVBQ2xCOztBQXZCUDtNQXlCVSxlQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvdW50LWltYWdlLXNtYWxse1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjNDU1YTY0O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgIFxyXG4gIC5zaWRlYmFyIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzI2YzZkYTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXIgYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4gICAgXHJcbiAgICBjb2xvcjogIzAwOWVmYjtcclxuICB9XHJcbiAgXHJcbiAgZGl2LmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZjVmOTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDFweCAxNnB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwMHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLnNpZGViYXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyIGEge2Zsb2F0OiBsZWZ0O31cclxuICAgIGRpdi5jb250ZW50IHttYXJnaW4tbGVmdDogMDt9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAuc2lkZWJhciBhIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdlLXRpdGxlcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAwIC0xNXB4IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgaDMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuYnJlYWRjcnVtYiB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGNvbG9yOiNhNmI3YmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5icmVhZGNydW1iLWl0ZW0rLmJyZWFkY3J1bWItaXRlbTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcXGU2NDlcIjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHRoZW1pZnk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYTZiN2JmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5icmVhZGNydW1iLWl0ZW0uYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICAjOTlhYmI0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _blog_create_blogcategory_blogcategory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog/create/blogcategory/blogcategory.service */ "./src/app/blog/create/blogcategory/blogcategory.service.ts");
/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blog/blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../account/account.service */ "./src/app/account/account.service.ts");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(LS, BCS, AS, BS, cdr) {
        this.LS = LS;
        this.BCS = BCS;
        this.AS = AS;
        this.BS = BS;
        this.cdr = cdr;
        this.nav_list = [
            ["Home", "home"],
            ["Logout", "power-off"]
        ];
        this.nav_selected = this.nav_list[0][0];
        this.BCS.addChild(this);
        BS.addChild(this);
        this.LS.addChild(this);
    }
    DashboardComponent.prototype.updatenav = function (nav) {
        this.nav_selected = nav[0];
        this.cdr.detectChanges();
        if (this.nav_selected == "Logout") {
            this.nav_list = [
                ["Home", "home"],
                ["Logout", "power-off"]
            ];
            this.AS.logout();
        }
        //console.log(this.nav_selected, nav);
    };
    DashboardComponent.prototype.selected_blog_category = function (value) {
        //document.getElementById('blc-card').style.display='none';
        this.selected_blc = value.url;
        this.cdr.detectChanges();
        document.getElementById("bce_image_prev").style.backgroundImage = 'url(' + this.BCS.BlogCategories[this.selected_blc].body.image + ')';
    };
    /*update_bc(){
      // get all the elements
      var url = this.selected_blc, img = document.getElementById('bce_image').innerText, name = document.getElementById('bce_name').innerText,
        title = document.getElementById('bce_title').innerText, disc = document.getElementById('bce_desc').innerText;
        if(img.indexOf("https://drive.google.com/file/d/")!=-1){
        // drive image
        img="https://drive.google.com/uc?export=view&id="+img.split("/")[5];
        }
        var body = JSON.stringify({
          title:title,
          image:img,
          disc:disc
        })
        this.BCS.update_bc(this.selected_blc, name, body).subscribe(data=>{
          console.log(data);
          this.BCS.getAllBlogCategories();
          
        }, error=>{
          console.log(error)
        });
  
    }*/
    DashboardComponent.prototype.delete_bc = function () {
        var url = this.selected_blc;
        this.selected_blc = null;
        this.BCS.delete_bc(url);
    };
    DashboardComponent.prototype.ngOnInit = function () {
        if (this.LS.islogged == false) {
            console.log(this.LS.child_elements);
        }
        console.log();
    };
    DashboardComponent.prototype.refresh = function () {
        //console.log('I was caslled')
        if (this.LS.is_staff) {
            this.nav_list = [
                ["Home", "home"],
                ["Create Blog", "plus"],
                ["Edit a blog category", "edit"],
                ["Logout", "power-off"]
            ];
        }
        this.cdr.detectChanges();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _blog_create_blogcategory_blogcategory_service__WEBPACK_IMPORTED_MODULE_3__["BlogcategoryService"],
            _account_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
            _blog_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"ftco-footer ftco-bg-dark ftco-section img\" style=\"background-image: url(assets/images/bg_2.jpg); background-attachment:fixed;\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row mb-5\">\r\n      <div class=\"col-md-5\">\r\n        <div class=\"ftco-footer-widget mb-4\">\r\n          <h2><a class=\"navbar-brand\" href=\"/home\"><i class=\"flaticon- \"></i>Carrerofy <br><small> </small></a></h2>\r\n          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>\r\n          <ul class=\"ftco-footer-social list-unstyled float-md-left float-lft mt-5\">\r\n            <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-twitter\"></span></a></li>\r\n            <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-facebook\"></span></a></li>\r\n            <li class=\"ftco-animate\"><a href=\"#\"><span class=\"icon-instagram\"></span></a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n         <div class=\"ftco-footer-widget mb-4 ml-md-4\">\r\n          <h2 class=\"ftco-heading-2\">Site Links</h2>\r\n          <ul class=\"list-unstyled\">\r\n            <li><a href=\"/home\" class=\"py-2 d-block\">Home</a></li>\r\n            <li><a href=\"/about\" class=\"py-2 d-block\">About</a></li>\r\n            <li><a href=\"/courses/interviews\" class=\"py-2 d-block\">Interviews</a></li>\r\n            <li><a href=\"/mentors\" class=\"py-2 d-block\">Mentorship</a></li>\r\n            <li><a href=\"/courses\" class=\"py-2 d-block\">Courses</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <div class=\"ftco-footer-widget mb-4\">\r\n          <h2 class=\"ftco-heading-2\">Have a Questions?</h2>\r\n          <div class=\"block-23 mb-3\">\r\n            <ul>\r\n              <li><span class=\"icon icon-map-marker\"></span><span class=\"text\">Oakwood Estate, DLF Phase 2, Sector 25, Gurgaon</span></li>\r\n              <li><a href=\"#\"><span class=\"icon icon-phone\"></span><span class=\"text\">+91 8587015675</span></a></li>\r\n              <li><a href=\"#\"><span class=\"icon icon-envelope\"></span><span class=\"text\"><span class=\"__cf_email__\" data-cfemail=\"761f181019360f19030412191b171f185815191b\">career6177@gmail.com</span></span></a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-center\">\r\n\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-center\">\r\n\r\n        <p>\r\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |  Made with  <i class=\"icon-heart\" aria-hidden=\"true\"></i> by <a href=\"#\" target=\"_blank\">CypherOps</a>\r\n</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf='ls.islogged==false' (click)='showlogin()'>\r\n  Login\r\n</span>\r\n<span *ngIf='ls.islogged'>\r\n  <a href=\"/dashboard\" style=\"color:white\">Dashboard</a>\r\n</span>\r\n  \r\n\r\n<div id=\"logindiv\" class=\"logindiv\">  \r\n      <button class=\"btn btn-danger cross\" (click)=\"hidelogin()\">X</button>\r\n        <div class=\"inner\" *ngIf='ls.islogged==false'>\r\n          <h3 class=\"text-center\">Sign In</h3>\r\n            <div *ngIf='ls.islogged!=true'>\r\n                <p>\r\n                    <!-- <label>Username :</label> -->\r\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Username\"  id=\"loginformuser\">\r\n                  </p>\r\n                  <p>\r\n                      <!-- <label>Password :</label> -->\r\n                      <input class=\"form-control\" type=\"password\" placeholder=\"Password\"  id=\"loginformpass\">\r\n                    </p>\r\n                  <p>\r\n                    <button type=\"button\" (click)='login()' class=\"btn btn-primary\" >Login</button>\r\n                    \r\n                  </p>\r\n                  <p style=\"color:#000;\">Still not registered ?</p>\r\n                  <button style=\" background:#db3236; border-radius:0px; width:100%; color:#fff; margin-bottom:3px;\"class=\"btn btn-default\">Sign Up with Google <br><i class=\"icon-google-plus\"></i> </button> \r\n            </div>\r\n        </div>\r\n        <div class=\"inner\" *ngIf='false'>\r\n          <h3 class=\"text-center\">{{ ls.user.username }}</h3>\r\n            <div *ngIf='ls.islogged==true'>\r\n                  <p>\r\n                    <!--input class=\"form-control\" type=\"text\" placeholder=\"Username\"  id=\"loginformuser\"-->\r\n                    <button type=\"button\" class=\"btn btn-primary\" >Dashboard</button>\r\n                  </p>\r\n                  <p>\r\n                    <button type=\"button\" (click)='logout()' class=\"btn btn-danger\" >Logout</button>\r\n                  </p>\r\n                  <p style=\"color:#000;\">Connect accounts</p>\r\n                  <button style=\" background:#db3236; border-radius:0px; width:100%; color:#fff; margin-bottom:3px;\"class=\"btn btn-default\">Sign Up with Google <br><i class=\"icon-google-plus\"></i> </button> \r\n                  \r\n                  <button style=\" background: #3b5998; border-radius:0px; width:100%; color:#fff\"class=\"btn btn-default\">Sign Up with Facebook <br><span class=\"icon-facebook\"></span> </button>\r\n            </div>\r\n        </div>\r\n        \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: white;\n  padding: 5px; }\n\ninput {\n  border-width: 0;\n  border-bottom-width: 1px;\n  border-bottom-color: white;\n  padding: 0px 15px 0px 15px;\n  color: white;\n  background-color: transparent;\n  border-radius: 50px; }\n\n.logindiv {\n  display: none;\n  z-index: 3;\n  position: fixed;\n  top: 10px;\n  bottom: 10px;\n  left: 10px;\n  right: 10px;\n  opacity: 1;\n  background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%); }\n\n.cross {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  color: white; }\n\n.inner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  background: #f2f2f2;\n  padding: 60px;\n  border-radius: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxNYXlhbmtcXERlc2t0b3BcXE1hbmdvYnl0ZVxcbWFuZ29ieXRlL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFXO0VBQ1gsYUFBVyxFQUNkOztBQUNEO0VBQ0ksZ0JBQWM7RUFDZCx5QkFBd0I7RUFDeEIsMkJBQTBCO0VBQzFCLDJCQUEwQjtFQUMxQixhQUFZO0VBQ1osOEJBQTZCO0VBQzdCLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLGNBQWE7RUFBQyxXQUFTO0VBQUMsZ0JBQWM7RUFBRSxVQUFRO0VBQUUsYUFBVztFQUFFLFdBQVM7RUFBQyxZQUFVO0VBQUUsV0FBUztFQUM5RixvRUFBbUUsRUFDdEU7O0FBRUQ7RUFDSSxtQkFBa0I7RUFBRSxXQUFTO0VBQUUsU0FBTztFQUFDLGFBQVksRUFDdEQ7O0FBQ0Q7RUFDSSxtQkFBaUI7RUFBRSxTQUFPO0VBQUUsVUFBUTtFQUFFLHlDQUFnQztVQUFoQyxpQ0FBZ0M7RUFDdkUsb0JBQWtCO0VBQ2pCLGNBQWE7RUFDYixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwYWRkaW5nOjVweDtcclxufVxyXG5pbnB1dHtcclxuICAgIGJvcmRlci13aWR0aDowO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweCAwcHggMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ubG9naW5kaXZ7XHJcbiAgICBkaXNwbGF5OiBub25lO3otaW5kZXg6Mztwb3NpdGlvbjpmaXhlZDsgdG9wOjEwcHg7IGJvdHRvbToxMHB4OyBsZWZ0OjEwcHg7cmlnaHQ6MTBweDsgb3BhY2l0eToxO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2Q5YWZkOSAwJSwgIzk3ZDllMSAxMDAlKTtcclxufVxyXG5cclxuLmNyb3Nze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyByaWdodDo1cHg7IHRvcDo1cHg7Y29sb3I6IHdoaXRlOyBcclxufVxyXG4uaW5uZXJ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjUwJTsgbGVmdDo1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICBiYWNrZ3JvdW5kOiNmMmYyZjI7XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(ls, cdr) {
        this.ls = ls;
        this.cdr = cdr;
        ls.addChild(this);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        var self = this;
    };
    LoginComponent.prototype.hidelogin = function () {
        document.getElementById("logindiv").style.display = "none";
        console.log("login hidden");
    };
    LoginComponent.prototype.showlogin = function () {
        document.getElementById("logindiv").style.display = "block";
        console.log("login shown");
    };
    LoginComponent.prototype.refresh = function () {
        this.cdr.detectChanges();
    };
    LoginComponent.prototype.login = function () {
        var self = this;
        this.ls.up_login(document.getElementById("loginformuser")['value'], document.getElementById("loginformpass")['value']);
    };
    LoginComponent.prototype.logout = function () {
        var self = this;
        this.ls.logout();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//var $:any;
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.serverurl = "https://hashblog.herokuapp.com/";
        this.data = {
            user: null,
            token: null
        };
        this.is_staff = false;
        this.islogged = false;
        this.verified = false;
        this.after_verify = [];
        //refresh childs
        this.child_elements = [];
        //  this.serverurl="http://localhost:8000/";
        // check if user details present or not
        var token = localStorage.getItem('auth_token');
        //user = localStorage.getItem('auth_user');
        if (token == null) {
            // user is not logged
            this.islogged = false;
            this.verified = true;
        }
        else {
            this.check_user(token);
        }
    }
    LoginService.prototype.check_user = function (token, self) {
        if (self === void 0) { self = this; }
        // check the server for user details
        this.http.get(this.serverurl + 'users/status/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Token ' + token)
        }).subscribe(function (data) {
            try {
                self.is_staff = data['is_staff'];
                console.log("Status found from server: ", data);
                self.data.token = token;
                self.data.user = data['user'];
                self.data.user.info = JSON.parse(data['user'].info);
                self.islogged = true;
                localStorage.setItem('auth_token', token);
                console.log(self.data.user);
                self.refresh();
            }
            catch (e) {
                console.log(e);
            }
        }, function (error) {
            console.log('errors occured', error);
            self.islogged = false;
            // remove un-necessary token
            localStorage.removeItem('auth_token');
            self.verified = true;
        }, function () {
            self.verified = true;
            console.log("User is verified now ");
            for (var _i = 0, _a = self.after_verify; _i < _a.length; _i++) {
                var x = _a[_i];
                x();
            }
            self.after_verify = [];
        });
    };
    LoginService.prototype.google_signup = function (id_token, self) {
        if (self === void 0) { self = this; }
        if (this.islogged) {
            // already logged in
            alert("You must logout before creating any new account");
        }
        else {
            // rest is same as google login
            this.google_login(id_token, self);
        }
    };
    LoginService.prototype.google_login = function (id_token, self) {
        if (self === void 0) { self = this; }
        // login only if verified == true
        console.log('Google Login called', self.verified, self.islogged);
        if (self.verified == false) {
            console.log("User is not verified from server yet, so pushing the login to queue");
            self.after_verify.push(function () { self.google_login(id_token); });
        }
        else {
            // user is verified
            if (self.islogged) {
                console.log("user is already logged in, aborting!!!");
            }
            else {
                // its verified that user is not logged, so googl loging in now...
                //console.log('I was here');
                self.verified = false;
                self.http.post(self.serverurl + 'logingoogle/', new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id_token', id_token), {}).subscribe(function (data) {
                    self.check_user(data['token']);
                });
            }
        }
    };
    LoginService.prototype.onLoginSuccess = function (token) {
        this.islogged = true;
    };
    LoginService.prototype.up_login = function (username, password) {
        if (this.islogged) {
            alert("User is already logged!!");
        }
    };
    LoginService.prototype.logout = function (after) {
        var _this = this;
        if (after === void 0) { after = function () { }; }
        this.http.post(this.serverurl + 'logout/', {}, { headers: this.getHeaders() }).subscribe(function (data) {
            after();
            console.log("After logout, result fetched from server");
            _this.islogged = false;
            _this.data.user = null;
            _this.refresh();
        });
    };
    LoginService.prototype.getHeaders = function () {
        if (this.islogged)
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Authorization", "Token " + this.data.token);
        else
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
    };
    LoginService.prototype.login = function () {
    };
    LoginService.prototype.refresh = function () {
        for (var x in this.child_elements) {
            this.child_elements[x].refresh();
        }
    };
    LoginService.prototype.addChild = function (x) {
        if (this.child_elements.indexOf(x) == -1) {
            this.child_elements.push(x);
        }
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/nav/about/about.component.html":
/*!************************************************!*\
  !*** ./src/app/nav/about/about.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url(' ../assets/images/bg_2.jpg'); background-attachment:fixed;\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\r\n      <div class=\"col-md-8 ftco-animate text-center\">\r\n        <p class=\"breadcrumbs\"><span class=\"mr-2\"><a href=\"/home\">Home</a></span> <span>About</span></p>\r\n        <h1 class=\"mb-3 bread\">About</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<section class=\"ftco-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row d-flex\">\r\n      <div class=\"col-md-6 d-flex ftco-animate\">\r\n          <div class=\"img img-about align-self-stretch\" style=\"background-image: url( ../assets/images/112.jpg); width: 100%;\"></div>\r\n      </div>\r\n      <div class=\"col-md-6 pl-md-5 ftco-animate\">\r\n        <h2 class=\"mb-4\">Welcome to  Careerofy</h2>\r\n<p>We are a group of enthusiasts who want to embark on the field of education. There is a dire gap in the career options available and their depth of awareness amongst students/ working professionals. Addressing to which, we have created a platform where you can get to know about different career fields from experts pursuing the same field. You can even get a personalised guidance from our consultants and weave your career with rainbow colours and utmost caution.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section-3 img align-self-stretch\" style=\"background-image: url( ../assets/images/bg_3.jpg);\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row d-md-flex justify-content-center\">\r\n      <div class=\"col-md-9 about-video text-center\">\r\n        <h2 class=\"ftco-animate\"> Careerofy   is a Leading Schools Around the World</h2>\r\n        <div class=\"video d-flex justify-content-center\">\r\n          <a href=\"https://www.youtube.com/watch?v=tghjgOv4mKc\" class=\"button popup-vimeo d-flex justify-content-center align-items-center\"><span class=\"ion-ios-play\"></span></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"ftco-counter bg-light\" id=\"section-counter\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-10\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 d-flex justify-content-center counter-wrap ftco-animate\">\r\n            <div class=\"block-18 text-center\">\r\n              <div class=\"text\">\r\n                <strong class=\"number\" data-number=\"10300\">0</strong>\r\n                <span>Satisfied Students</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 d-flex justify-content-center counter-wrap ftco-animate\">\r\n            <div class=\"block-18 text-center\">\r\n              <div class=\"text\">\r\n                <strong class=\"number\" data-number=\"7896\">0</strong>\r\n                <span>Courses Completed</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 d-flex justify-content-center counter-wrap ftco-animate\">\r\n            <div class=\"block-18 text-center\">\r\n              <div class=\"text\">\r\n                <strong class=\"number\" data-number=\"400\">0</strong>\r\n                <span>Experts Advisors</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 d-flex justify-content-center counter-wrap ftco-animate\">\r\n            <div class=\"block-18 text-center\">\r\n              <div class=\"text\">\r\n                <strong class=\"number\" data-number=\"200\">0</strong>\r\n                <span>Schools</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"ftco-section\">\r\n    <h2 class=\"mb-4 text-center\">Our Mentor & Guide</h2>\r\n  <div class=\"container\">\r\n    <div class=\"row d-flex\">\r\n      <div class=\"col-md-6 pl-md-5 ftco-animate\">\r\n        <div class=\"info ml-4\">\r\n            <h3><a href=\"teacher-single.html\">Jayant Sinha Ji</a></h3>\r\n            <span class=\"position\">Chief Advisor</span>\r\n            <p class=\"ftco-social d-flex\">\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-twitter\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-facebook\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-instagram\"></span></a>\r\n              </p>\r\n          </div>\r\n<p>Jayant Sinha Ji is the Minister of State for Civil Aviation, a Member of Indian Parliament and formerly the Minister of State for Finance. He holds an M.B.A. with Distinction from the Harvard Business School, an M.S. in Energy Management & Policy from the   of Pennsylvania, and a Bachelor of Technology degree with Distinction from the Indian Institute of Technology Delhi. His prior experience includes twelve years with McKinsey & Company as a partner in the Boston and Delhi offices. Sinha has served on the boards of several companies and organizations, including Daily Hunt, d.light, iMerit and Janaagraha. He was invited to serve on the International Advisory Board of the International Finance Corporation, Washington DC. </p>\r\n      </div>\r\n      <div class=\"col-md-6 d-flex ftco-animate\">\r\n        <div class=\"img img-about align-self-stretch\" style=\"background-image: url( ../assets/images/jjs.jpg); width: 100%;\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"ftco-section bg-light\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center mb-5 pb-3\">\r\n            <div class=\"col-md-7 heading-section ftco-animate text-center\">\r\n              <h2 class=\"mb-4\">Our Team</h2>\r\n            </div>\r\n          </div>\r\n      <div class=\"row d-flex\">\r\n          <div class=\"col-md-6 d-flex ftco-animate\">\r\n              <div class=\"img img-about align-self-stretch\" style=\"background-image: url( ../assets/images/11.jpg); width: 100%; height: 300px !important;\"></div>\r\n            </div>\r\n        <div class=\"col-md-6 pl-md-5 ftco-animate\">\r\n            <div class=\"info ml-4\">\r\n                <h3><a href=\"teacher-single.html\">Alok Singh</a></h3>\r\n                <span class=\"position\">Founder</span>\r\n                <p class=\"ftco-social d-flex\">\r\n                  <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-twitter\"></span></a>\r\n                  <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-facebook\"></span></a>\r\n                  <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-instagram\"></span></a>\r\n                </p>\r\n              </div>\r\n          <!-- <h2 class=\"mb-4\">Welcome to  Careerofy</h2> -->\r\n          <p>Alok is a full time Consultant and a part time writer. He has a prior experience in Policy Making, Banking and FMCG sector. He did his graduation from IIT Delhi.</p>\r\n        </div>\r\n      </div>\r\n    </div><br>\r\n    <div class=\"container\">\r\n      <div class=\"row d-flex\">\r\n        <div class=\"col-md-6 pl-md-5 ftco-animate\">\r\n            <div class=\"info ml-4\">\r\n                <h3><a href=\"teacher-single.html\">Aditi Mishra</a></h3>\r\n                <span class=\"position\">Founder</span>\r\n                <p class=\"ftco-social d-flex\">\r\n                  <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-twitter\"></span></a>\r\n                  <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-facebook\"></span></a>\r\n                  <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-instagram\"></span></a>\r\n                </p>\r\n              </div>\r\n          <!-- <h2 class=\"mb-4\">Welcome to  Careerofy</h2> -->\r\n          <p>Aditi is a Consultant working with E & Y. Her interests includes policy making and public services. She has completed her graduation from IIT Delhi in 2017</p>        </div>\r\n        <div class=\"col-md-6 d-flex ftco-animate\">\r\n            <div class=\"img img-about align-self-stretch\" style=\"background-image: url( ../assets/images/2.png); width: 100%; height: 300px !important;\"></div>\r\n          </div>\r\n      </div>\r\n    </div><br>\r\n    <div class=\"container\">\r\n      <div class=\"row d-flex\">\r\n          <div class=\"col-md-6 d-flex ftco-animate\">\r\n              <div class=\"img img-about align-self-stretch\" style=\"background-image: url( ../assets/images/namna.jpg); width: 100%; height: 300px !important;\"></div>\r\n            </div>\r\n        <div class=\"col-md-6 pl-md-5 ftco-animate\">\r\n            <div class=\"info ml-4\">\r\n                <h3><a href=\"teacher-single.html\">Naman Bharadwaj</a></h3>\r\n                <span class=\"position\">Co-Founder</span>\r\n                <p class=\"ftco-social d-flex\">\r\n                  <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-twitter\"></span></a>\r\n                  <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-facebook\"></span></a>\r\n                  <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-instagram\"></span></a>\r\n                </p>\r\n              </div>\r\n          <!-- <h2 class=\"mb-4\">Welcome to  Careerofy</h2> -->\r\n          <p>Naman is a consultant with IQVIA. He has worked in various roles including sales and marketing. He completed his graduation from Manipal  . </p>\r\n        </div>\r\n      </div>\r\n    </div><br>\r\n  </section>\r\n\r\n\r\n\r\n<section class=\"ftco-section-parallax\">\r\n  <div class=\"parallax-img d-flex align-items-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row d-flex justify-content-center\">\r\n        <div class=\"col-md-7 text-center heading-section heading-section-white ftco-animate\">\r\n          <h2>Subcribe to our Newsletter</h2>\r\n          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\r\n          <div class=\"row d-flex justify-content-center mt-5\">\r\n            <div class=\"col-md-8\">\r\n              <form action=\"#\" class=\"subscribe-form\">\r\n                <div class=\"form-group d-flex\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter email address\">\r\n                  <input type=\"submit\" value=\"Subscribe\" class=\"submit px-3\">\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/nav/about/about.component.scss":
/*!************************************************!*\
  !*** ./src/app/nav/about/about.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/about/about.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav/about/about.component.ts ***!
  \**********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../assets/js/main.js');
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/nav/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/nav/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/nav/contact/contact.component.html":
/*!****************************************************!*\
  !*** ./src/app/nav/contact/contact.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url(' ../assets/images/bg_2.jpg'); background-attachment:fixed;\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\r\n      <div class=\"col-md-8 ftco-animate text-center\">\r\n        <p class=\"breadcrumbs\"><span class=\"mr-2\"><a href=\"/home\">Home</a></span> <span>Contact</span></p>\r\n        <h1 class=\"mb-3 bread\">Contact Us</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"ftco-section contact-section ftco-degree-bg\">\r\n  <div class=\"container\">\r\n    <div class=\"row d-flex mb-5 contact-info\">\r\n      <div class=\"col-md-12 mb-4\">\r\n        <h2 class=\"h4\">Contact Information</h2>\r\n      </div>\r\n      <div class=\"w-100\"></div>\r\n      <div class=\"col-md-3\">\r\n        <p><span>Address:</span> Oakwood Estate, DLF Phase 2, Sector 25, Gurgaon </p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p><span>Phone:</span> <a href=\"tel://+918587015675\">+91 8587015675</a></p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p><span>Email:</span> <a href=\"mailto:alok6177@gmail.com\">alok6177@gmail.com</a></p>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <p><span>Website: </span> <a href=\"careerofy.com\">Careerofy.com</a></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row block-9\">\r\n      <div class=\"col-md-6 pr-md-5\">\r\n        <h4 class=\"mb-4\">Do you have any questions?</h4>\r\n        <form action=\"#\">\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Your Name\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Your Email\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subject\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <textarea name=\"\" id=\"\" cols=\"30\" rows=\"7\" class=\"form-control\" placeholder=\"Message\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"submit\" value=\"Send Message\" class=\"btn btn-primary py-3 px-5\">\r\n          </div>\r\n        </form>\r\n      \r\n      </div>\r\n\r\n      <!-- <div class=\"col-md-6\" id=\"map\"></div> -->\r\n      <div class=\"col-md-6 d-flex ftco-animate\">\r\n        <div class=\"img img-about align-self-stretch\" style=\"background-image: url( ../assets/images/bg_3.jpg); width: 100%;\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section-parallax\">\r\n  <div class=\"parallax-img d-flex align-items-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row d-flex justify-content-center\">\r\n        <div class=\"col-md-7 text-center heading-section heading-section-white ftco-animate\">\r\n          <h2>Subcribe to our Newsletter</h2>\r\n          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\r\n          <div class=\"row d-flex justify-content-center mt-5\">\r\n            <div class=\"col-md-8\">\r\n              <form action=\"#\" class=\"subscribe-form\">\r\n                <div class=\"form-group d-flex\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter email address\">\r\n                  <input type=\"submit\" value=\"Subscribe\" class=\"submit px-3\">\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/nav/contact/contact.component.scss":
/*!****************************************************!*\
  !*** ./src/app/nav/contact/contact.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/contact/contact.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nav/contact/contact.component.ts ***!
  \**************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../assets/js/main.js');
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/nav/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/nav/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/nav/details/details.component.html":
/*!****************************************************!*\
  !*** ./src/app/nav/details/details.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url(' ../assets/images/bg_2.jpg'); background-attachment:fixed;\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\r\n      <div class=\"col-md-8 ftco-animate text-center\">\r\n        <p class=\"breadcrumbs\"><span class=\"mr-2\"><a href=\"/home\">Home</a></span> <span>Courses</span></p>\r\n        <h1 class=\"mb-3 bread\">Course Details</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"ftco-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/academia\" class=\"img\" style=\"background-image: url( ../assets/images/course-1.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>English</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/academia\">Academia</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/academia\" class=\"btn btn-primary\">View now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/corporate\" class=\"img\" style=\"background-image: url( ../assets/images/course-2.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>Bussiness</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/corporate\">Corporate Jobs</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/corporate\" class=\"btn btn-primary\">View now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/entrepreneurship\" class=\"img\" style=\"background-image: url( ../assets/images/course-3.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>Business</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/entrepreneurship\">Entrepreneurship</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/entrepreneurship\" class=\"btn btn-primary\">View now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/public\" class=\"img\" style=\"background-image: url( ../assets/images/course-4.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>English</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/public\">Public Sector</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/public\" class=\"btn btn-primary\">View now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/politics\" class=\"img\" style=\"background-image: url( ../assets/images/course-5.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>Social</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/politics\">Politics</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/politics\" class=\"btn btn-primary\">View now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section-parallax\">\r\n  <div class=\"parallax-img d-flex align-items-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row d-flex justify-content-center\">\r\n        <div class=\"col-md-7 text-center heading-section heading-section-white ftco-animate\">\r\n          <h2>Subcribe to our Newsletter</h2>\r\n          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\r\n          <div class=\"row d-flex justify-content-center mt-5\">\r\n            <div class=\"col-md-8\">\r\n              <form action=\"#\" class=\"subscribe-form\">\r\n                <div class=\"form-group d-flex\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter email address\">\r\n                  <input type=\"submit\" value=\"Subscribe\" class=\"submit px-3\">\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/nav/details/details.component.scss":
/*!****************************************************!*\
  !*** ./src/app/nav/details/details.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/details/details.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nav/details/details.component.ts ***!
  \**************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../assets/js/main.js');
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/nav/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/nav/details/details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/nav/home/home.component.html":
/*!**********************************************!*\
  !*** ./src/app/nav/home/home.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-wrap\" style=\"background-image: url('../assets/images/27.jpg'); background-attachment:fixed;\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\r\n      <div class=\"col-md-8 ftco-animate text-center\"><br><br><br>\r\n        <h1 class=\"mb-4\"><span class=\"typing\" style=\"color:#fff ;\"></span></h1><br><br>\r\n        <p><a href=\"/interviews\" class=\"btn btn-primary px-4 py-3\">Interviews</a> <a href=\"/courses\" class=\"btn btn-secondary px-4 py-3\">Courses</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n\r\n<section class=\"ftco-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 d-flex align-self-stretch ftco-animate\">\r\n        <div class=\"media block-6 services p-3 py-4 d-block text-center\">\r\n          <div class=\"icon d-flex justify-content-center align-items-center mb-3\"><span class=\"flaticon-exam\"></span></div>\r\n          <div class=\"media-body px-3\">\r\n            <h3 class=\"heading\">Videos</h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>\r\n          </div>\r\n        </div>      \r\n      </div>\r\n      <div class=\"col-md-4 d-flex align-self-stretch ftco-animate\">\r\n        <div class=\"media block-6 services p-3 py-4 d-block text-center\">\r\n          <div class=\"icon d-flex justify-content-center align-items-center mb-3\"><span class=\"flaticon-blackboard\"></span></div>\r\n          <div class=\"media-body px-3\">\r\n            <h3 class=\"heading\">Interviews</h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>\r\n          </div>\r\n        </div>      \r\n      </div>\r\n      <div class=\"col-md-4 d-flex align-self-stretch ftco-animate\">\r\n        <div class=\"media block-6 services p-3 py-4 d-block text-center\">\r\n          <div class=\"icon d-flex justify-content-center align-items-center mb-3\"><span class=\"flaticon-books\"></span></div>\r\n          <div class=\"media-body px-3\">\r\n            <h3 class=\"heading\">Mentorship</h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>\r\n          </div>\r\n        </div>    \r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"ftco-section bg-light\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center mb-5 pb-3\">\r\n      <div class=\"col-md-7 heading-section ftco-animate text-center\">\r\n        <h2 class=\"mb-4\">Recent Interviews</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row d-flex\">\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"blog-entry align-self-stretch\">\r\n          <a href=\"blog-single.html\" class=\"block-20\" style=\"background-image: url('assets/images/image_1.jpg');\">\r\n          </a>\r\n          <div class=\"text p-4 d-block\">\r\n            <div class=\"meta mb-3\">\r\n              <div><a href=\"#\">August 12, 2018</a></div>\r\n              <div><a href=\"#\">Admin</a></div>\r\n              <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\r\n            </div>\r\n            <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\r\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"blog-entry align-self-stretch\">\r\n          <a href=\"blog-single.html\" class=\"block-20\" style=\"background-image: url('assets/images/image_2.jpg');\">\r\n          </a>\r\n          <div class=\"text p-4 d-block\">\r\n            <div class=\"meta mb-3\">\r\n              <div><a href=\"#\">August 12, 2018</a></div>\r\n              <div><a href=\"#\">Admin</a></div>\r\n              <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\r\n            </div>\r\n            <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\r\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"blog-entry align-self-stretch\">\r\n          <a href=\"blog-single.html\" class=\"block-20\" style=\"background-image: url('assets/images/image_3.jpg');\">\r\n          </a>\r\n          <div class=\"text p-4 d-block\">\r\n            <div class=\"meta mb-3\">\r\n              <div><a href=\"#\">August 12, 2018</a></div>\r\n              <div><a href=\"#\">Admin</a></div>\r\n              <div><a href=\"#\" class=\"meta-chat\"><span class=\"icon-chat\"></span> 3</a></div>\r\n            </div>\r\n            <h3 class=\"heading mt-3\"><a href=\"#\">How to standout at start of your UX Career</a></h3>\r\n            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section-3 img\" style=\"background-image: url(assets/images/28.jpg);\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row d-md-flex justify-content-center\">\r\n      <div class=\"col-md-9 about-video text-center\">\r\n        <h2 class=\"ftco-animate\"> Careerofy   is a Leading Schools Around the World</h2>\r\n        <div class=\"video d-flex justify-content-center\">\r\n          <a href=\"https://www.youtube.com/watch?v=tghjgOv4mKc\" class=\"button popup-vimeo d-flex justify-content-center align-items-center\"><span class=\"ion-ios-play\"></span></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"ftco-counter bg-light\" id=\"section-counter\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-10\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3 d-flex justify-content-center counter-wrap ftco-animate\">\r\n            <div class=\"block-18 text-center\">\r\n              <div class=\"text\">\r\n                <strong class=\"number\" data-number=\"10300\">0</strong>\r\n                <span>Satisfied Students</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 d-flex justify-content-center counter-wrap ftco-animate\">\r\n            <div class=\"block-18 text-center\">\r\n              <div class=\"text\">\r\n                <strong class=\"number\" data-number=\"7896\">0</strong>\r\n                <span>Student's Success Stories</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 d-flex justify-content-center counter-wrap ftco-animate\">\r\n            <div class=\"block-18 text-center\">\r\n              <div class=\"text\">\r\n                <strong class=\"number\" data-number=\"400\">0</strong>\r\n                <span>Experts Advisors</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3 d-flex justify-content-center counter-wrap ftco-animate\">\r\n            <div class=\"block-18 text-center\">\r\n              <div class=\"text\">\r\n                <strong class=\"number\" data-number=\"200\">0</strong>\r\n                <span>Recent Happenings</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section testimony-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center mb-5 pb-3\">\r\n      <div class=\"col-md-7 heading-section ftco-animate text-center\">\r\n        <h2 class=\"mb-4\">Success Stories </h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 ftco-animate\">\r\n        <div class=\"carousel-testimony owl-carousel\">\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center\">\r\n              <div class=\"user-img mb-5\" style=\"background-image: url(assets/images/person_1.jpg)\">\r\n                <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                  <i class=\"icon-quote-left\"></i>\r\n                </span>\r\n              </div>\r\n              <div class=\"text\">\r\n                <p class=\"mb-5\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\r\n                <p class=\"name\">Dennis Green</p>\r\n                <span class=\"position\">CSE Student</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center\">\r\n              <div class=\"user-img mb-5\" style=\"background-image: url(assets/images/person_2.jpg)\">\r\n                <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                  <i class=\"icon-quote-left\"></i>\r\n                </span>\r\n              </div>\r\n              <div class=\"text\">\r\n                <p class=\"mb-5\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\r\n                <p class=\"name\">Dennis Green</p>\r\n                <span class=\"position\">Math Student</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center\">\r\n              <div class=\"user-img mb-5\" style=\"background-image: url(assets/images/person_3.jpg)\">\r\n                <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                  <i class=\"icon-quote-left\"></i>\r\n                </span>\r\n              </div>\r\n              <div class=\"text\">\r\n                <p class=\"mb-5\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\r\n                <p class=\"name\">Dennis Green</p>\r\n                <span class=\"position\">Science Students</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"item\">\r\n            <div class=\"testimony-wrap text-center\">\r\n              <div class=\"user-img mb-5\" style=\"background-image: url(assets/images/person_3.jpg)\">\r\n                <span class=\"quote d-flex align-items-center justify-content-center\">\r\n                  <i class=\"icon-quote-left\"></i>\r\n                </span>\r\n              </div>\r\n              <div class=\"text\">\r\n                <p class=\"mb-5\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\r\n                <p class=\"name\">Dennis Green</p>\r\n                <span class=\"position\">English Student</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section bg-light\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center mb-5 pb-3\">\r\n      <div class=\"col-md-7 heading-section ftco-animate text-center\">\r\n        <h2 class=\"mb-4\">Our Experience Advisor</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 mb-sm-4 ftco-animate\">\r\n        <div class=\"staff\">\r\n          <div class=\"d-flex mb-4\">\r\n            <div class=\"img\" style=\"background-image: url(assets/images/person_1.jpg);\"></div>\r\n            <div class=\"info ml-4\">\r\n              <h3><a href=\"teacher-single.html\">Ivan Jacobson</a></h3>\r\n              <span class=\"position\">CSE Teacher</span>\r\n              <p class=\"ftco-social d-flex\">\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-twitter\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-facebook\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-instagram\"></span></a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"text\">\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 mb-sm-4 ftco-animate\">\r\n        <div class=\"staff\">\r\n          <div class=\"d-flex mb-4\">\r\n            <div class=\"img\" style=\"background-image: url(assets/images/person_2.jpg);\"></div>\r\n            <div class=\"info ml-4\">\r\n              <h3><a href=\"teacher-single.html\">Ivan Jacobson</a></h3>\r\n              <span class=\"position\">CSE Teacher</span>\r\n              <p class=\"ftco-social d-flex\">\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-twitter\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-facebook\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-instagram\"></span></a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"text\">\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 mb-sm-4 ftco-animate\">\r\n        <div class=\"staff\">\r\n          <div class=\"d-flex mb-4\">\r\n            <div class=\"img\" style=\"background-image: url(assets/images/person_3.jpg);\"></div>\r\n            <div class=\"info ml-4\">\r\n              <h3><a href=\"teacher-single.html\">Ivan Jacobson</a></h3>\r\n              <span class=\"position\">CSE Teacher</span>\r\n              <p class=\"ftco-social d-flex\">\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-twitter\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-facebook\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-instagram\"></span></a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"text\">\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section-parallax\">\r\n  <div class=\"parallax-img d-flex align-items-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row d-flex justify-content-center\">\r\n        <div class=\"col-md-7 text-center heading-section heading-section-white ftco-animate\">\r\n          <h2>Subcribe to our Newsletter</h2>\r\n          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\r\n          <div class=\"row d-flex justify-content-center mt-5\">\r\n            <div class=\"col-md-8\">\r\n              <form action=\"#\" class=\"subscribe-form\">\r\n                <div class=\"form-group d-flex\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter email address\">\r\n                  <input type=\"submit\" value=\"Subscribe\" class=\"submit px-3\">\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/nav/home/home.component.scss":
/*!**********************************************!*\
  !*** ./src/app/nav/home/home.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/home/home.component.ts":
/*!********************************************!*\
  !*** ./src/app/nav/home/home.component.ts ***!
  \********************************************/
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
    HomeComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../assets/js/main.js');
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/nav/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/nav/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/interviews/interviews.component.html":
/*!**********************************************************!*\
  !*** ./src/app/nav/interviews/interviews.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url(' ../assets/images/bg_2.jpg'); background-attachment:fixed;\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\r\n      <div class=\"col-md-8 ftco-animate text-center\">\r\n        <p class=\"breadcrumbs\"><span class=\"mr-2\"><a href=\"/home\">Home</a></span> <span>Interviews</span></p>\r\n        <h1 class=\"mb-3 bread\">Interviews</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<section class=\"ftco-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/academia\" class=\"img\" style=\"background-image: url( ../assets/images/course-1.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>English</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/academia\">Academia</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/academia\" class=\"btn btn-primary\">View now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/corporate\" class=\"img\" style=\"background-image: url( ../assets/images/course-2.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>Bussiness</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/corporate\">Corporate Jobs</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/corporate\" class=\"btn btn-primary\">View now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/entrepreneurship\" class=\"img\" style=\"background-image: url( ../assets/images/course-3.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>Business</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/entrepreneurship\">Entrepreneurship</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/entrepreneurship\" class=\"btn btn-primary\">View now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/public\" class=\"img\" style=\"background-image: url( ../assets/images/course-4.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>English</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/public\">Public Sector</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/public\" class=\"btn btn-primary\">View now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/politics\" class=\"img\" style=\"background-image: url( ../assets/images/course-5.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>Social</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/politics\">Politics</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/politics\" class=\"btn btn-primary\">View now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section-parallax\">\r\n  <div class=\"parallax-img d-flex align-items-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row d-flex justify-content-center\">\r\n        <div class=\"col-md-7 text-center heading-section heading-section-white ftco-animate\">\r\n          <h2>Subcribe to our Newsletter</h2>\r\n          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\r\n          <div class=\"row d-flex justify-content-center mt-5\">\r\n            <div class=\"col-md-8\">\r\n              <form action=\"#\" class=\"subscribe-form\">\r\n                <div class=\"form-group d-flex\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter email address\">\r\n                  <input type=\"submit\" value=\"Subscribe\" class=\"submit px-3\">\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/nav/interviews/interviews.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/nav/interviews/interviews.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9pbnRlcnZpZXdzL2ludGVydmlld3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/interviews/interviews.component.ts":
/*!********************************************************!*\
  !*** ./src/app/nav/interviews/interviews.component.ts ***!
  \********************************************************/
/*! exports provided: InterviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewsComponent", function() { return InterviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InterviewsComponent = /** @class */ (function () {
    function InterviewsComponent() {
    }
    InterviewsComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../assets/js/main.js');
    };
    InterviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interviews',
            template: __webpack_require__(/*! ./interviews.component.html */ "./src/app/nav/interviews/interviews.component.html"),
            styles: [__webpack_require__(/*! ./interviews.component.scss */ "./src/app/nav/interviews/interviews.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InterviewsComponent);
    return InterviewsComponent;
}());



/***/ }),

/***/ "./src/app/nav/mentors/mentors.component.html":
/*!****************************************************!*\
  !*** ./src/app/nav/mentors/mentors.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url(' ../assets/images/bg_2.jpg'); background-attachment:fixed;\">\r\n  <div class=\"overlay\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\r\n      <div class=\"col-md-8 ftco-animate text-center\">\r\n        <p class=\"breadcrumbs\"><span class=\"mr-2\"><a href=\"/home\">Home</a></span> <span>Mentorship</span></p>\r\n        <h1 class=\"mb-3 bread\">Mentorship</h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<section class=\"ftco-section\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/academia\" class=\"img\" style=\"background-image: url( ../assets/images/course-1.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>English</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/academia\">Academia</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/academia\" class=\"btn btn-primary\">Enroll Now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/corporate\" class=\"img\" style=\"background-image: url( ../assets/images/course-2.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>Bussiness</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/corporate\">Corporate Jobs</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/corporate\" class=\"btn btn-primary\">Enroll Now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/entrepreneurship\" class=\"img\" style=\"background-image: url( ../assets/images/course-3.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>Business</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/entrepreneurship\">Entrepreneurship</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/entrepreneurship\" class=\"btn btn-primary\">Enroll Now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/public\" class=\"img\" style=\"background-image: url( ../assets/images/course-4.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>English</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/public\">Public Sector</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/public\" class=\"btn btn-primary\">Enroll Now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 d-flex ftco-animate\">\r\n        <div class=\"course align-self-stretch\">\r\n          <a href=\"/courses/politics\" class=\"img\" style=\"background-image: url( ../assets/images/course-5.jpg)\"></a>\r\n          <div class=\"text p-4\">\r\n            <p class=\"category\"><span>Social</span> <span class=\"price\"> </span></p>\r\n            <h3 class=\"mb-3\"><a href=\"/courses/politics\">Politics</a></h3>\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n            <p><a href=\"/courses/politics\" class=\"btn btn-primary\">Enroll Now!</a></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"ftco-section bg-light\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center mb-5 pb-3\">\r\n      <div class=\"col-md-7 heading-section ftco-animate text-center\">\r\n        <h2 class=\"mb-4\">Our Experience Advisor</h2>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 mb-sm-4 ftco-animate\">\r\n        <div class=\"staff\">\r\n          <div class=\"d-flex mb-4\">\r\n            <div class=\"img\" style=\"background-image: url( ../assets/images/person_1.jpg);\"></div>\r\n            <div class=\"info ml-4\">\r\n              <h3><a href=\"teacher-single.html\">Ivan Jacobson</a></h3>\r\n              <span class=\"position\">CSE Teacher</span>\r\n              <p class=\"ftco-social d-flex\">\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-twitter\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-facebook\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-instagram\"></span></a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"text\">\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 mb-sm-4 ftco-animate\">\r\n        <div class=\"staff\">\r\n          <div class=\"d-flex mb-4\">\r\n            <div class=\"img\" style=\"background-image: url( ../assets/images/person_2.jpg);\"></div>\r\n            <div class=\"info ml-4\">\r\n              <h3><a href=\"teacher-single.html\">Ivan Jacobson</a></h3>\r\n              <span class=\"position\">CSE Teacher</span>\r\n              <p class=\"ftco-social d-flex\">\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-twitter\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-facebook\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-instagram\"></span></a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"text\">\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-4 mb-sm-4 ftco-animate\">\r\n        <div class=\"staff\">\r\n          <div class=\"d-flex mb-4\">\r\n            <div class=\"img\" style=\"background-image: url( ../assets/images/person_3.jpg);\"></div>\r\n            <div class=\"info ml-4\">\r\n              <h3><a href=\"teacher-single.html\">Ivan Jacobson</a></h3>\r\n              <span class=\"position\">CSE Teacher</span>\r\n              <p class=\"ftco-social d-flex\">\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-twitter\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-facebook\"></span></a>\r\n                <a href=\"#\" class=\"d-flex justify-content-center align-items-center\"><span class=\"icon-instagram\"></span></a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"text\">\r\n            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"ftco-section-parallax\">\r\n  <div class=\"parallax-img d-flex align-items-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row d-flex justify-content-center\">\r\n        <div class=\"col-md-7 text-center heading-section heading-section-white ftco-animate\">\r\n          <h2>Subcribe to our Newsletter</h2>\r\n          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>\r\n          <div class=\"row d-flex justify-content-center mt-5\">\r\n            <div class=\"col-md-8\">\r\n              <form action=\"#\" class=\"subscribe-form\">\r\n                <div class=\"form-group d-flex\">\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter email address\">\r\n                  <input type=\"submit\" value=\"Subscribe\" class=\"submit px-3\">\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/nav/mentors/mentors.component.scss":
/*!****************************************************!*\
  !*** ./src/app/nav/mentors/mentors.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9tZW50b3JzL21lbnRvcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/mentors/mentors.component.ts":
/*!**************************************************!*\
  !*** ./src/app/nav/mentors/mentors.component.ts ***!
  \**************************************************/
/*! exports provided: MentorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentorsComponent", function() { return MentorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MentorsComponent = /** @class */ (function () {
    function MentorsComponent() {
    }
    MentorsComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../assets/js/main.js');
    };
    MentorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mentors',
            template: __webpack_require__(/*! ./mentors.component.html */ "./src/app/nav/mentors/mentors.component.html"),
            styles: [__webpack_require__(/*! ./mentors.component.scss */ "./src/app/nav/mentors/mentors.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MentorsComponent);
    return MentorsComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light\" id=\"ftco-navbar\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"/home\"><i class=\"flaticon- \"></i> Careerofy <br><small> </small></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#ftco-nav\" aria-controls=\"ftco-nav\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"oi oi-menu\"></span> Menu\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"ftco-nav\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link vertical-center\" href=\"/home\">Home</a>\r\n          </li>\r\n        <li *ngFor=\"let nav of nav_elements\" [ngClass]=\"{'nav-item':true, 'active':nav_selected==nav[0]}\">\r\n          <a class=\"nav-link vertical-center\" (click)=\"change_nav(nav)\" href=\"javascript:void(0)\">{{nav[0]}}</a>\r\n        </li>\r\n        <li class=\"nav-item\"><a class=\"nav-link vertical-center\">\r\n            <app-account [show]=\"'icon'\"></app-account>\r\n        </a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<main *ngIf=\"!show_blog\">\r\n  <div *ngIf=\"nav_selected=='Home'\" class=\"\">\r\n    <app-home></app-home>\r\n  </div>\r\n  <div *ngIf=\"nav_selected=='About'\" class=\"\">\r\n    <app-about></app-about>\r\n  </div>\r\n  <div *ngIf=\"nav_selected=='Interviews'\" class=\"\">\r\n\r\n  </div>\r\n  <div *ngIf=\"nav_selected=='Mentorship'\">\r\n    <app-mentors></app-mentors>\r\n  </div>\r\n  <div *ngIf=\"nav_selected=='Contact'\">\r\n    <app-contact></app-contact>\r\n  </div>\r\n  <ng-container *ngIf=\"nav_selected=='Interviews' || nav_selected=='Courses' || nav_selected=='Blogs'\">\r\n      <div class=\"hero-wrap hero-wrap-2\" style=\"background-image: url('../../../assets/images/bg_2.jpg'); background-attachment:fixed;\">\r\n        <div class=\"overlay\"></div>\r\n        <div class=\"container\">\r\n          <div class=\"row no-gutters slider-text align-items-center justify-content-center\" data-scrollax-parent=\"true\">\r\n            <div class=\"col-md-8 ftco-animate text-center\">\r\n              <p class=\"breadcrumbs\">\r\n                <!--span id=\"banner_small\">Interview/Courses</span-->\r\n              </p>\r\n              <h1 class=\"mb-3 bread\" id=\"banner_big\">{{nav_selected}}</h1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    <div *ngIf=\"nav_selected=='Interviews'\">\r\n      <app-previewdisplayer [parent_bc]=\"this.LS.serverurl+'blogs/blogcategory/1/'\"></app-previewdisplayer>\r\n    </div>\r\n    <div *ngIf=\"nav_selected=='Courses'\">\r\n      <app-previewdisplayer [parent_bc]=\"this.LS.serverurl+'blogs/blogcategory/2/'\"></app-previewdisplayer>\r\n    </div>\r\n    <div *ngIf=\"nav_selected=='Blogs'\">\r\n          <app-previewdisplayer [parent_bc]=\"this.LS.serverurl+'blogs/blogcategory/3/'\"></app-previewdisplayer>\r\n        </div>\r\n  </ng-container>\r\n</main>\r\n<app-blogdetails *ngIf=\"show_blog\" [id]=\"nav_selected\">\r\n  hell to all\r\n</app-blogdetails>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown:hover .dropdown-content {\n  display: block; }\n\n.vertical-center {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0M6XFxVc2Vyc1xcTWF5YW5rXFxEZXNrdG9wXFxNYW5nb2J5dGVcXG1hbmdvYnl0ZS9zcmNcXGFwcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBbUMsZUFBYyxFQUFHOztBQUNwRDtFQUNJLG1CQUFrQjtFQUNsQixTQUFRO0VBQ1Isb0NBQTJCO1VBQTNCLDRCQUEyQixFQUM5QiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cclxuLnZlcnRpY2FsLWNlbnRlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var NavComponent = /** @class */ (function () {
    function NavComponent(cdr, LS, route, loc) {
        this.cdr = cdr;
        this.LS = LS;
        this.route = route;
        this.loc = loc;
        this.nav_elements = [
            ["About", "/about"],
            ["Interviews", "/courses/interviews"],
            ["Mentorship", "/mentors"],
            ["Courses", "/courses/details"],
            ["Blogs", ""],
            ["Contact", "/contact"],
        ];
        this.nav_selected = 'Home';
        this.sub_component = false;
        this.show_blog = false;
    }
    NavComponent.prototype.change_nav = function (nav) {
        this.show_blog = false;
        this.nav_selected = nav[0];
        window['$']('.navbar-toggler').click(); //bootstrap
        this.ngAfterViewInit();
        this.cdr.detectChanges();
        document.scrollingElement.scrollTop = 0;
        //console.log(nav, this.nav_selected);
        this.loc.go(nav[0]);
        //console.log(this.nav_selected, this.show_blog);
    };
    NavComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../assets/js/main.js');
    };
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var a = params['id'];
            if (Object.is(Number(a), NaN)) {
                _this.nav_selected = a[0].toUpperCase() + a.slice(1);
                _this.show_blog = false;
                console.log("Was i here?");
            }
            else {
                _this.show_blog = true;
                _this.nav_selected = a;
                console.log("I ws here", a, Number(a));
            }
            //console.log(this.nav_selected, this.show_blog, Number(a))*/
            _this.nav_selected = a[0].toUpperCase() + a.slice(1);
            console.log(_this.nav_selected, _this.show_blog);
        });
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/nav/previewdisplayer/editbc/editbc.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/nav/previewdisplayer/editbc/editbc.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  editbc works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/nav/previewdisplayer/editbc/editbc.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/nav/previewdisplayer/editbc/editbc.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9wcmV2aWV3ZGlzcGxheWVyL2VkaXRiYy9lZGl0YmMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/nav/previewdisplayer/editbc/editbc.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/nav/previewdisplayer/editbc/editbc.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditbcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditbcComponent", function() { return EditbcComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditbcComponent = /** @class */ (function () {
    function EditbcComponent() {
    }
    EditbcComponent.prototype.ngOnInit = function () {
    };
    EditbcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editbc',
            template: __webpack_require__(/*! ./editbc.component.html */ "./src/app/nav/previewdisplayer/editbc/editbc.component.html"),
            styles: [__webpack_require__(/*! ./editbc.component.scss */ "./src/app/nav/previewdisplayer/editbc/editbc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditbcComponent);
    return EditbcComponent;
}());



/***/ }),

/***/ "./src/app/nav/previewdisplayer/previewdisplayer.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/nav/previewdisplayer/previewdisplayer.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ng-container *ngIf=\"group_list.length!=0\">\r\n<section class=\"ftco-section bg-light\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n        <ng-container *ngFor=\"let gl of group_list\">\r\n          <ng-container *ngIf=\"type(this.BCS.BlogCategories[gl].body)!=0\">\r\n            <div class=\"col-md-4 d-flex\">\r\n              <div class=\"course align-self-stretch\" style=\"margin-bottom:10px;\">\r\n                <img src=\"{{this.BCS.BlogCategories[gl].body.image}}\" style=\"max-width:100%;\" class=\"img card-img-top\">\r\n                <div class=\"text p-4\">\r\n                  <p class=\"category\"><span>{{this.BCS.BlogCategories[gl].name}}</span> <span class=\"price\"> </span></p>\r\n                  <h3 class=\"mb-3\"><a>{{this.BCS.BlogCategories[gl].body.title}}</a></h3>\r\n                  <p>{{this.BCS.BlogCategories[gl].body.disc}}</p>\r\n                  <p><a href=\"javascript:void(0)\" (click)=\"changeto(gl)\" class=\"btn btn-primary\">View now!</a></p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"type(this.BCS.BlogCategories[gl].body)==0\">\r\n                      <div class=\"col-md-12 heading-section ftco-animate text-center\">\r\n                        <h2 class=\"mb-4\">{{this.BCS.BlogCategories[gl].name}}</h2>\r\n                        <app-previewdisplayer [parent_bc]=\"gl\"></app-previewdisplayer>\r\n                      </div>                   \r\n          </ng-container>         \r\n        </ng-container>\r\n    </div>\r\n  </div>\r\n</section>\r\n</ng-container>\r\n<section class=\"ftco-section bg-light\">\r\n    <div class=\"container\">\r\n    <div class=\"row d-flex ftco-animate \" style=\"margin-top:30px;margin-bottom:20px;\">\r\n          <div *ngFor=\"let blog of blog_list\" class=\"col-md-4 d-flex\" >\r\n            <div class=\"course align-self-stretch\" style=\"margin-bottom:10px;\">\r\n            <a [attr.href]=\"this.BLS.Blogs[blog].blog_type!='2'?'/'+get_id_from_url(this.BLS.Blogs[blog].url):null\">\r\n            <img  src=\"{{this.BLS.Blogs[blog].preview.med_url}}\" style=\"max-width:100%;\" class=\"img card-img-top\">\r\n            </a>\r\n            <div class=\"text p-4 d-block\">\r\n              <div class=\"meta mb-3\">\r\n                <div><span [hidden]=\"!editable\">Date:</span>\r\n                    <a [ngClass]=\"{'form-control':editable}\" [attr.contenteditable]=\"editable\" #date>{{this.BLS.Blogs[blog].preview.date}}</a> &nbsp;&nbsp;\r\n                    <span [hidden]=\"!editable\">U Name:</span><a [ngClass]=\"{'form-control':editable}\" [attr.contenteditable]=\"editable\" #uname>{{this.BLS.Blogs[blog].preview.uname}}</a>\r\n                  </div>\r\n        \r\n                <div><span [hidden]=\"!editable\">Media:</span><a [ngClass]=\"{'form-control':editable}\" class=\"meta-chat\" [attr.contenteditable]=\"editable\" [hidden]=\"!editable\" #med_url>{{this.BLS.Blogs[blog].preview.med_url}}</a></div>\r\n              </div>\r\n              <h4 class=\"heading mt-3\"><a [attr.contenteditable]=\"editable\" #name>{{this.BLS.Blogs[blog].name}}</a></h4>\r\n              <p [ngClass]=\"{'form-control':editable}\" [attr.contenteditable]=\"editable\" #disc>{{this.BLS.Blogs[blog].preview.disc}}</p>\r\n              <a [attr.href]=\"this.BLS.Blogs[blog].blog_type!='2'?'/'+get_id_from_url(this.BLS.Blogs[blog].url):null\" class=\"btn btn-primary\">View Now</a>\r\n            </div>\r\n            <button *ngIf=\"!editable && this.LS.islogged && this.LS.is_staff\" (click)=\"editable=!editable\" class=\"btn btn-danger\">\r\n              <i class=\"fas fa-edit\"></i>\r\n            </button>\r\n            <button *ngIf=\"editable\" class=\"btn btn-success\" style=\"width:100px !important;\" (click)=\"this.BLS.update_blog(\r\n              blog,\r\n              name.innerText,\r\n              {'date':date.innerText,\r\n              'uname':uname.innerText,\r\n              'med_url':med_url.innerText,\r\n              'disc':\r\n              disc.innerText}\r\n            ); editable=false;\"><i class=\"fas fa-save\"></i></button>\r\n            <button *ngIf=\"editable\" style=\"width:100px !important;\"  class=\"btn btn-danger\" (click)=\"\r\n              this.BLS.deleteBlog(this.BLS.Blogs[blog].url)\r\n            \"><i class=\"fas fa-trash\"></i></button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n    </section>"

/***/ }),

/***/ "./src/app/nav/previewdisplayer/previewdisplayer.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/nav/previewdisplayer/previewdisplayer.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog-entry {\n  padding: 0;\n  margin: 5px; }\n\n.nopad {\n  padding: 0; }\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L3ByZXZpZXdkaXNwbGF5ZXIvQzpcXFVzZXJzXFxNYXlhbmtcXERlc2t0b3BcXE1hbmdvYnl0ZVxcbWFuZ29ieXRlL3NyY1xcYXBwXFxuYXZcXHByZXZpZXdkaXNwbGF5ZXJcXHByZXZpZXdkaXNwbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1YsWUFBVSxFQUNiOztBQUNEO0VBQ0ksV0FBUyxFQUNaOztBQUNEO0VBQ0ksNENBQXdDLEVBQ3pDIiwiZmlsZSI6InNyYy9hcHAvbmF2L3ByZXZpZXdkaXNwbGF5ZXIvcHJldmlld2Rpc3BsYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLWVudHJ5e1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjo1cHg7XHJcbn1cclxuLm5vcGFke1xyXG4gICAgcGFkZGluZzowO1xyXG59XHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/previewdisplayer/previewdisplayer.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/nav/previewdisplayer/previewdisplayer.component.ts ***!
  \********************************************************************/
/*! exports provided: PreviewdisplayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewdisplayerComponent", function() { return PreviewdisplayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_blog_create_blogcategory_blogcategory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/blog/create/blogcategory/blogcategory.service */ "./src/app/blog/create/blogcategory/blogcategory.service.ts");
/* harmony import */ var src_app_blog_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/blog/blog.service */ "./src/app/blog/blog.service.ts");
/* harmony import */ var src_app_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/login/login.service */ "./src/app/login/login.service.ts");





var PreviewdisplayerComponent = /** @class */ (function () {
    function PreviewdisplayerComponent(BCS, BLS, LS, cdr) {
        this.BCS = BCS;
        this.BLS = BLS;
        this.LS = LS;
        this.cdr = cdr;
        this.group_list = [];
        this.blog_list = [];
        this.editable = false;
        BCS.addChild(this);
        BLS.addChild(this);
    }
    PreviewdisplayerComponent.prototype.refresh = function () {
        //console.log(this.parent_bc);
        console.log(this.blog_list, this.group_list, this.BCS.BlogCategories);
        if (!(this.parent_bc in this.BCS.BlogCategories))
            return;
        this.group_list = this.BCS.BlogCategories[this.parent_bc].child_categories;
        this.blog_list = this.BCS.BlogCategories[this.parent_bc].child_blogs;
        this.cdr.detectChanges();
    };
    PreviewdisplayerComponent.prototype.changeto = function (v) {
        //console.log(v);
        this.parent_bc = v;
        this.refresh();
    };
    PreviewdisplayerComponent.prototype.ngOnInit = function () {
        console.log(this.parent_bc);
        this.refresh();
    };
    PreviewdisplayerComponent.prototype.ngAfterViewInit = function () {
        $.getScript('../assets/js/main.js');
    };
    PreviewdisplayerComponent.prototype.get_id_from_url = function (url) {
        return url.split("/")[5];
    };
    PreviewdisplayerComponent.prototype.type = function (body) {
        if (body == undefined || body == null)
            return -1;
        return Object.keys(body).length;
    };
    PreviewdisplayerComponent.prototype.dump = function (str) {
        console.log(str);
        return str;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PreviewdisplayerComponent.prototype, "parent_bc", void 0);
    PreviewdisplayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-previewdisplayer',
            template: __webpack_require__(/*! ./previewdisplayer.component.html */ "./src/app/nav/previewdisplayer/previewdisplayer.component.html"),
            styles: [__webpack_require__(/*! ./previewdisplayer.component.scss */ "./src/app/nav/previewdisplayer/previewdisplayer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_blog_create_blogcategory_blogcategory_service__WEBPACK_IMPORTED_MODULE_2__["BlogcategoryService"],
            src_app_blog_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"], src_app_login_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PreviewdisplayerComponent);
    return PreviewdisplayerComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mayank\Desktop\Mangobyte\mangobyte\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
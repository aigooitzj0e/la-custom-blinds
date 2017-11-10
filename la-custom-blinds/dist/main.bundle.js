webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__motorization_motorization_component__ = __webpack_require__("../../../../../src/app/motorization/motorization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__appointment_appointment_component__ = __webpack_require__("../../../../../src/app/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_3__products_products_component__["a" /* ProductsComponent */]
    },
    {
        path: 'motorization',
        component: __WEBPACK_IMPORTED_MODULE_4__motorization_motorization_component__["a" /* MotorizationComponent */]
    },
    {
        path: 'appointment',
        component: __WEBPACK_IMPORTED_MODULE_5__appointment_appointment_component__["a" /* AppointmentComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n    border-bottom: 1px solid rgb(207, 207, 207);\n}\n\n\n\n/*================*/\n\n\n.example-container {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n}\n\n.example-sidenav-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.example-sidenav {\n  margin-top: 65px;\n  padding: 25px;\n  background-color: #48A49D;\n  width: 30%;\n  border-right: 2px solid rgb(0, 110, 113);\n}\n\n.sidenav-btn {\n    position: fixed;\n    margin-left: -20px;\n    left: 0;\n    top: 30%;\n    height: 100px;\n    width: 100px;\n    border-bottom-right-radius: 100%;\n    border-top-right-radius: 100%;\n    border: none;\n    background-color: #48A49D;\n}\n\n.modal-text {\n    text-align: center;\n    margin: 20px 0px;\n}\n\n.modal-container {\n    margin: auto;\n    width: 300px;\n}\n\n.modal-form input, textarea {\n    width: 300px;\n    margin: 5px 0px;\n    border: none;\n}\n\n.white {\n    color: #fff;\n}\n\n.modal-contact-info {\n    margin-top: 100px;\n}\n\n.modal-contact-info li {\n    list-style: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" style=\"background-color: #F8F8F8;\">\n\n  <img src=\"/assets/img/la-logo-1.png\" alt=\"LA Custom Blinds Logo\" style=\"height: 50px\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active ml-5\">\n        <a class=\"nav-link\" [routerLink]=\"['home']\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item dropdown ml-2\">\n        <a class=\"nav-link dropdown-toggle\" [routerLink]=\"['products']\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Products\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item ml-2\">\n        <a class=\"nav-link\" [routerLink]=\"['motorization']\">Motorization</a>\n      </li>\n      <li class=\"nav-item ml-2\">\n        <a class=\"nav-link\" [routerLink]=\"['appointment']\">Schedule Appointment</a>\n      </li>\n      <li class=\"nav-item ml-2\">\n        <a class=\"nav-link\" [routerLink]=\"['about']\">About Us</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n\n<mat-sidenav-container class=\"test example-container\">\n    <mat-sidenav #sidenav class=\"example-sidenav\">\n\n        <h3 class=\"modal-text\">Schedule your <span class=\"white\">FREE</span> shop at home appointment & get <span class=\"white\">FREE</span> installation</h3>\n        <div class=\"modal-container\">\n            <table>\n                <form class=\"modal-form\" action=\"\" method=\"post\">\n                    <tr>\n                        <td><input type=\"text\" name=\"name\" placeholder=\"Name\"></td>\n                    </tr>\n                    <tr>\n                        <td><input type=\"text\" name=\"email\" placeholder=\"Email\"></td>\n                    </tr>\n                    <tr>\n                        <td><input type=\"text\" name=\"number\" placeholder=\"Phone Number\"></td>\n                    </tr>\n                    <tr>\n                        <td><textarea type=\"text\" name=\"name\" placeholder=\"Enter a message\"></textarea></td>\n                    </tr>\n                    <tr>\n                        <td><input type=\"submit\" value=\"Submit\"></td>\n                    </tr>\n                </form>\n                </table>\n\n                <ul class=\"modal-contact-info\">\n                    <li><i class=\"fa fa-phone\"></i>  800-254-6371</li>\n                    <li><i class=\"fa fa-envelope\"></i>  help@lacustomblinds.com</li>\n                </ul>\n\n            </div>\n    </mat-sidenav>\n\n    <div class=\"example-sidenav-content\">\n        <button class=\"sidenav-btn\" type=\"button\" mat-button (click)=\"sidenav.open()\">\n            Free\n        </button>\n    </div>\n\n</mat-sidenav-container>\n\n\n\n\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.state = 'void';
        this.isCollapsed = false;
    }
    AppComponent.prototype.collapsed = function (event) {
        console.log(event);
    };
    AppComponent.prototype.expanded = function (event) {
        console.log(event);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__motorization_motorization_component__ = __webpack_require__("../../../../../src/app/motorization/motorization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__appointment_appointment_component__ = __webpack_require__("../../../../../src/app/appointment/appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__motorization_motorization_component__["a" /* MotorizationComponent */],
            __WEBPACK_IMPORTED_MODULE_10__appointment_appointment_component__["a" /* AppointmentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material_sidenav__["a" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/appointment/appointment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/appointment/appointment.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  appointment works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/appointment/appointment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppointmentComponent = (function () {
    function AppointmentComponent() {
    }
    AppointmentComponent.prototype.ngOnInit = function () {
    };
    return AppointmentComponent;
}());
AppointmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-appointment',
        template: __webpack_require__("../../../../../src/app/appointment/appointment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/appointment/appointment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppointmentComponent);

//# sourceMappingURL=appointment.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.main_image {\n    background-image: url('/assets/img/main_home.png');\n    height: 100vh;\n    position: relative;\n    /*opacity: 0.70;*/\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n\n.ptext1 {\n    position: absolute;\n    top: 50%;\n    width: 100%;\n    text-align: center;\n    color: white;\n    font-size: 27px;\n    letter-spacing: 8px;\n}\n\n.myborder{\n    background-color: #111;\n    color: #fff;\n    padding: 20px;\n    opacity: 0.80;\n}\n\n.green {\n    color: #48A49D;\n}\n\n\n\n/*.logo_text {\n    display: inline;\n}*/\n\n#about_us {\n    margin: 100px 0px;\n}\n\n#about_us p {\n    margin-top: 20px;\n}\n\n.pimg1 {\n    background-image: url('/assets/img/parallax_bg1.webp');\n    height: 350px;\n    position: relative;\n    opacity: 0.80;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n\n#services {\n    margin: 100px 0px;\n    text-align: center;\n}\n.icon_set {\n    margin-top: 50px;\n}\n\n.icon1, .icon2, .icon3, .icon4 {\n    display: inline-block;\n    width: 250px;\n}\n\n.services_text_highlight {\n    color: #48A49D;\n    font-weight: bold;\n}\n\n#installation {\n    background-color: rgb(64, 62, 64);\n    padding: 100px 0px;\n}\n\n#installation h1 {\n    text-align: center;\n    color: #48A49D;\n}\n\n#installation h3 {\n    text-align: center;\n    color: rgb(158, 158, 158);\n}\n\n#installation p {\n    color: #fff;\n}\n\n.text_container {\n    width: 45%;\n    display: inline-block;\n    margin-right: 50px;\n}\n\n.installation-img {\n    width: 45%;\n    vertical-align: top;\n}\n\n#coupons {\n    padding: 100px 0px;\n}\n\n.coupon-img {\n    margin: 0px 15px;\n}\n\n.card {\n    display: inline-block;\n    vertical-align: top;\n    margin: 100px 2.1%;\n    background-color: #f8f8f8;\n}\n\n#footer {\n    background-color: rgb(64, 62, 64);\n    height: 160px;\n    text-align: center;\n    padding: 20px;\n}\n\n#footer ul {\n    padding: 0px;\n}\n\n#footer li {\n    display: inline;\n    margin: 0px 40px;\n}\n\n#footer a {\n    font-size: 4em;\n}\n\n#footer p {\n    color: #fff;\n    margin-top: -20px;\n}\n\n.yelp {\n    color: red;\n}\n\n.houzz {\n    color: green;\n}\n\n.footer-links {\n    position: relative;\n    /*z-index: 10;*/\n}\n\n/* ====== RWD ====== */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- MAIN IMAGE -->\n<section id=\"showcase\">\n    <div class=\"main_image\">\n        <div class=\"ptext1\">\n            <span class=\"myborder\">\n                <span class=\"green\">LA</span> CUSTOM BLINDS\n            </span>\n        </div>\n    </div>\n</section>\n\n<!-- WHO WE ARE -->\n<section id=\"about_us\">\n    <div class=\"container\">\n        <h4 class=\"green\">WHO WE ARE</h4>\n        <p>Established in 1983. We are a family based business that started in the Midwest with three brothers opening the first store in Detroit in 1983. Since then, we’ve expanded beyond the Midwest, but the three of us still own and run the company by ourselves, maintaining the family environment. With our care for the client, experience, and design skills, we have become one of the largest independent window covering retailers in the country.</p>\n        <p class=\"hide\">With a keen eye for design and an expertise in integrating window shades and blinds into the room, we specialize in all forms of window treatments including roller shades, vertical blinds, motorized blinds and shutters. Our professional installers will come for installation quickly after your purchase to ensure that we satisfy your order with precision and care.</p>\n        <p class=\"hide\">With over 40 years of expertise in the national window treatment industry, our company provides an unparalleled customer experience when purchasing custom made window coverings. Call us today to schedule your free shop-at-home appointment and take advantage of our free installation.</p>\n    </div>\n</section>\n\n<!-- PARALLAX IMAGE -->\n<section id=\"parallax\">\n    <div class=\"pimg1\"></div>\n</section>\n\n<!-- WE BRING THE STORE TO YOU -->\n<section id=\"services\">\n    <div class=\"container\">\n        <h1 class=\"show\">We Bring The Store to You</h1>\n        <h4 class=\"show\">Call us today to schedule your FREE shop at home appointment!</h4>\n        <h1 class=\"hide\">WE BRING THE STORE TO YOU</h1>\n        <h4 class=\"hide\">Call us today to schedule your FREE shop at home appointment.  We will bring our full line of products right to your home.  Call today and get  FREE installation as well.</h4>\n        <div class=\"icon_set\">\n            <div class=\"icon1\">\n                <img class=\"logo\" src=\"/assets/img/logo_handshake.png\" alt=\"handshake logo\">\n                <p class=\"logo_text\">WE MAKE IT <span class=\"services_text_highlight\">EASY FOR YOU</span></p>\n            </div>\n            <div class=\"icon2\">\n                <img class=\"logo\" src=\"/assets/img/logo_pencil.png\" alt=\"pencil logo\">\n                <p class=\"logo_text\">FREE <span class=\"services_text_highlight\">DESIGN</span></p>\n            </div>\n            <div class=\"icon3\">\n                <img class=\"logo\" src=\"/assets/img/logo_measure.png\" alt=\"tape measure logo\">\n                <p class=\"logo_text\">FREE <span class=\"services_text_highlight\">MEASUREMENTS</span></p>\n            </div>\n            <div class=\"icon3\">\n                <img class=\"logo\" src=\"/assets/img/logo_tool.png\" alt=\"tool logo\">\n                <p class=\"logo_text\">FREE <span class=\"services_text_highlight\">INSTALLATION</span></p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- FREE INSTALLATION -->\n<section id=\"installation\">\n    <div class=\"container\">\n        <div class=\"text_container\">\n            <h1>FREE INSTALLATION</h1>\n            <h3>Installation is ALWAYS FREE on any order over $899.00. You save hundreds!</h3>\n            <p>Our team of professional installers will handle your project to the highest level of satisfaction. Our installers can handle the toughest installations with ease. With over 40 years in the business, our installers are trained to ensure the proper installation of your projects. We install Monday thru Saturday and our installers give you a specific time for your installation. We value your time and treat you with family-style service, unlike the big box stores.</p>\n        </div>\n        <img class=\"installation-img\" src=\"/assets/img/installation.webp\" alt=\"window blinds\">\n    </div>\n</section>\n\n<!-- COUPONS -->\n<section id=\"coupons\">\n    <div class=\"container\">\n        <img class=\"coupon-img\" src=\"/assets/img/200_off.png\" alt=\"$200 coupon\">\n        <img class=\"coupon-img\" src=\"/assets/img/financing.png\" alt=\"6 month financing\">\n    </div>\n</section>\n\n<hr>\n\n<!-- CUSTOMER REVIEWS -->\n<section id=\"reviews\">\n    <div class=\"container\">\n\n        <div class=\"card\" style=\"width: 20rem;\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Todd J.</h4>\n                <p class=\"card-text\">Install or Replace Blinds or Shades</p>\n                <p class=\"card-text\">\"I have never written a review for a company,but I thought I needed to take the time to commend this company for there outstanding work.I had both blinds and shades installed on 7 windows and the price and quality were both outstanding.It took only 2 weeks from ordering to installation and they look great.I would highly recommend.\"</p>\n            </div>\n        </div>\n\n        <div class=\"card\" style=\"width: 20rem;\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Marjorie F.</h4>\n                <p class=\"card-text\">Repair Blinds or Shades</p>\n                <p class=\"card-text\">\"I was pleased with the company's response to my problem. I was unable to remove the blinds myself, so they arrived in good time to take the blinds, repair them, and return them. It would have been cheaper if I could have taken them in myself, but fortunately they were able to help me out.\"</p>\n            </div>\n        </div>\n\n        <div class=\"card\" style=\"width: 20rem;\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">Larry C.</h4>\n                <p class=\"card-text\">Install or Replace Blinds or Shades</p>\n                <p class=\"card-text\">\"I called LA Custom Blinds and within a couple of minutes they were on the phone with me. There prices were outstanding and the customer service was more than friendly. I called many places for prices on new blinds and some repairs and LA Custom Blinds was by far the best. They turned my repair around in 30 minutes and the custom blinds and carpet I bought looks beautiful in my home. I would highly refer this company. They beat home depot and lowes by alot.\"</p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- FOOTER -->\n<footer id=\"footer\">\n    <div class=\"container\">\n        <ul>\n            <li><a class=\"footer-links\" href=\"https://www.facebook.com/LACustomBlinds1/\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li>\n            <li><a class=\"yelp footer-links\" href=\"https://www.yelp.com/biz/la-custom-blinds-los-angeles\" target=\"_blank\"><i class=\"fa fa-yelp\"></i></a></li>\n            <li><a class=\"houzz footer-links\" href=\"https://www.houzz.com/pro/lacustomblinds/la-custom-blinds\" target=\"_blank\"><i class=\"fa fa-houzz\"></i></a></li>\n        </ul>\n\n        <p>LA Custom Blinds &copy; 2017</p>\n    </div>\n</footer>\n\n<!-- APPOINTMENT (BOTTOM MODAL) -->\n<div id=\"modal-apt\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/motorization/motorization.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/motorization/motorization.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  motorization works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/motorization/motorization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotorizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MotorizationComponent = (function () {
    function MotorizationComponent() {
    }
    MotorizationComponent.prototype.ngOnInit = function () {
    };
    return MotorizationComponent;
}());
MotorizationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-motorization',
        template: __webpack_require__("../../../../../src/app/motorization/motorization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/motorization/motorization.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MotorizationComponent);

//# sourceMappingURL=motorization.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  products works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
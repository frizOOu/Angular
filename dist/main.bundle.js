webpackJsonp([0,4],{

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
    }
    DataService.prototype.getSchema = function () {
        return this.http.get('api/get-schema').map(function (res) { return res.json(); });
    };
    DataService.prototype.postData = function (objForm) {
        return this.http.post('api/request', JSON.stringify(objForm), this.options);
    };
    DataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=/Users/Frizou/Desktop/Angular2-BGFI/src/data.service.js.map

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToastComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastComponent = (function () {
    function ToastComponent() {
        this.message = { body: '', type: '' };
    }
    ToastComponent.prototype.setMessage = function (body, type, time) {
        var _this = this;
        if (time === void 0) { time = 3000; }
        this.message.body = body;
        this.message.type = type;
        setTimeout(function () { _this.message.body = ''; }, time);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], ToastComponent.prototype, "message", void 0);
    ToastComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-toast',
            template: __webpack_require__(683),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], ToastComponent);
    return ToastComponent;
}());
//# sourceMappingURL=/Users/Frizou/Desktop/Angular2-BGFI/src/toast.component.js.map

/***/ },

/***/ 386:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 386;


/***/ },

/***/ 387:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(510);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Frizou/Desktop/Angular2-BGFI/src/main.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
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
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(679),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/Frizou/Desktop/Angular2-BGFI/src/app.component.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page1_page1_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page2_page2_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page3_page3_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_toast_toast_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_grid_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_data_service__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/*
 *ROUTES
 */
var routing = __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot([
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__page1_page1_component__["a" /* Page1Component */] },
    { path: 'page2', component: __WEBPACK_IMPORTED_MODULE_7__page2_page2_component__["a" /* Page2Component */] },
    { path: 'page3', component: __WEBPACK_IMPORTED_MODULE_8__page3_page3_component__["a" /* Page3Component */] },
    { path: 'grid', component: __WEBPACK_IMPORTED_MODULE_10__grid_grid_component__["a" /* GridComponent */] }
]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__page1_page1_component__["a" /* Page1Component */],
                __WEBPACK_IMPORTED_MODULE_7__page2_page2_component__["a" /* Page2Component */],
                __WEBPACK_IMPORTED_MODULE_8__page3_page3_component__["a" /* Page3Component */],
                // ResultComponent,
                __WEBPACK_IMPORTED_MODULE_10__grid_grid_component__["a" /* GridComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                routing
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_toast_toast_component__["a" /* ToastComponent */],
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* CUSTOM_ELEMENTS_SCHEMA */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Frizou/Desktop/Angular2-BGFI/src/app.module.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GridComponent = (function () {
    function GridComponent() {
        this.datafiltered = JSON.parse(localStorage.getItem('data_filtered'));
        this.source = {
            datatype: "json",
            localdata: this.datafiltered,
        };
        this.dataAdapter = new __WEBPACK_IMPORTED_MODULE_3_jquery__["jqx"].dataAdapter(this.source);
        this.cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
            if (value > 20) {
                return '<span style ="margin : 4px; float: ' + columnproperties.cellsalign + '; color : #ff0000;">' + value + '</span>';
            }
            else {
                return '<span style ="margin : 4px; float :' + columnproperties.cellsalign + '; color : #008000">' + value + '</span>';
            }
        };
        this.settings = {
            width: 850,
            source: this.dataAdapter,
            pageable: true,
            autoheight: true,
            sortable: false,
            altrows: true,
            enabletooltips: false,
        };
    }
    GridComponent.prototype.ngAfterViewInit = function () {
        console.log(this.datafiltered);
        this.dataGrid.createComponent(this.settings);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('jqxgrid'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_jqwidgets_framework_jqwidgets_ts_angular_jqxgrid__["a" /* jqxGridComponent */]) === 'function' && _a) || Object)
    ], GridComponent.prototype, "dataGrid", void 0);
    GridComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-grid',
            template: '<jqxGrid></jqxGrid>',
            template: __webpack_require__(680),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Frizou/Desktop/Angular2-BGFI/src/grid.component.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(325);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Page1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page1Component = (function () {
    function Page1Component(route) {
        this.route = route;
        this.params = ['param1', 'param2', 'param3', 'param4', "param5", "param6", "param7", "param8", "param9", "param10", "param11", "param12", "param13", "param14", "param15", "param16", "param17", "param18", "param19", "param20"];
        this.param = [];
    }
    //Capter l'evenenement ngModelChange pour avoir les valeurs
    Page1Component.prototype.capt = function (event) {
        if (event) {
            this.param.push(event);
            this.storage = JSON.stringify(this.param);
            localStorage.setItem('params', this.storage);
        }
    };
    Page1Component.prototype.OnSubmit = function () {
        // si les parametres sont renseignés 
        // alors on affiche le form
        // sinon on redirige sur la page d'accueil 
        if (this.param.length > 0) {
            this.route.navigate(['/page2']);
        }
        else {
            this.route.navigate(['/']);
        }
    };
    Page1Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-page1',
            template: __webpack_require__(681),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], Page1Component);
    return Page1Component;
    var _a;
}());
//# sourceMappingURL=/Users/Frizou/Desktop/Angular2-BGFI/src/page1.component.js.map

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Page2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Page2Component = (function () {
    function Page2Component(router) {
        this.router = router;
        this.params = JSON.parse(localStorage.getItem('params'));
    }
    Page2Component.prototype.ngOnInit = function () {
        this.generateFormFilter();
        this.actionForm();
    };
    Page2Component.prototype.generateFormFilter = function () {
        if (this.params.length > 0) {
            //On creer les elements 
            var form = document.createElement("form");
            var table = document.createElement("table");
            table.setAttribute('class', "table table-bordered table-striped");
            form.setAttribute('class', "form-inline");
            form.setAttribute('id', "form");
            form.appendChild(table);
            //on boucle sur les éléments du tableau pour recuperer le nombre ainsi que le name pour chaque input
            for (var j = 0; j < this.params.length; ++j) {
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                var label = document.createElement("label");
                label.setAttribute('for', this.params[j]);
                label.innerHTML = this.params[j] + " => ";
                table.appendChild(tr);
                tr.appendChild(td);
                td.appendChild(label);
                var input = document.createElement("input");
                input.setAttribute('name', this.params[j]);
                input.setAttribute('required', "");
                input.setAttribute('class', 'form-control');
                td.appendChild(input);
            }
            var submit = document.createElement("input");
            submit.setAttribute('class', 'btn btn-primary');
            submit.setAttribute('type', "submit");
            submit.setAttribute('value', "generate");
            form.appendChild(submit);
            document.getElementById('content').appendChild(form);
        }
    };
    Page2Component.prototype.actionForm = function () {
        var self = this;
        function getFormData2Object(form) {
            var un_array = form.serializeArray();
            var _array = {};
            __WEBPACK_IMPORTED_MODULE_3_jquery__["map"](un_array, function (n, i) {
                if (n.name.indexOf('[') > -1) {
                    var array = n.name.match(/\[(.*?)\]/);
                    var key = n.name.replace(array[1], "").replace('[', "").replace(']', "");
                    if (!_array[key]) {
                        _array[key] = {};
                    }
                    _array[key][array[1]] = n['value'];
                }
                else {
                    _array[n['name']] = n['value'];
                }
            });
            return _array;
        }
        __WEBPACK_IMPORTED_MODULE_3_jquery__('form').submit(function () {
            //get form Data To Object
            this.objForm = getFormData2Object(__WEBPACK_IMPORTED_MODULE_3_jquery__('form'));
            if (this.objForm) {
                localStorage.setItem('indata', JSON.stringify(this.objForm));
                self.router.navigate(['/page3']);
            }
        });
    };
    Page2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-page2',
            template: __webpack_require__(682),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], Page2Component);
    return Page2Component;
    var _a;
}());
//# sourceMappingURL=/Users/Frizou/Desktop/Angular2-BGFI/src/page2.component.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Page3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Page3Component = (function () {
    function Page3Component(http, dataService, toast, route) {
        this.http = http;
        this.dataService = dataService;
        this.toast = toast;
        this.route = route;
        //On récupère les deux tableaux stocké dans le storage.
        ///Le premier contient uniquement les valeurs recupérées grace aux inputs.
        // public params = JSON.parse(localStorage.getItem('params'));
        this.initdata = JSON.parse(localStorage.getItem('indata'));
    }
    //Initialisation
    Page3Component.prototype.ngOnInit = function () {
        //On genere le formulaire a l'initialisation de la page.
        this.generateForm();
        //Envoie de donnée.
        this.actionForm();
    };
    Page3Component.prototype.generateForm = function () {
        if (this.initdata) {
            var form = document.createElement("form");
            var table = document.createElement("table");
            table.setAttribute('class', "table table-bordered table-striped");
            form.setAttribute('class', "form-inline");
            form.setAttribute('id', "form");
            form.appendChild(table);
            //on boucle sur les éléments du tableau pour recuperer le nombre ainsi que le name pour chaque input
            for (var i in this.initdata) {
                var newname = this.initdata[i];
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                table.appendChild(tr);
                tr.appendChild(td);
                var label = document.createElement("label");
                label.setAttribute('for', newname);
                label.innerHTML = i + " || " + newname + "=> : ";
                td.appendChild(label);
                var input = document.createElement("input");
                var inputNbr = document.createElement("input");
                var inputDate = document.createElement("input");
                input.setAttribute('name', newname);
                if (newname == "date") {
                    input.setAttribute('type', "date");
                }
                else if (newname == "age") {
                    input.setAttribute('type', "number");
                }
                else if (newname == "name") {
                    input.setAttribute('type', "text");
                }
                input.setAttribute('required', "");
                input.setAttribute('class', 'form-control');
                td.appendChild(input);
            }
            var submit = document.createElement("input");
            submit.setAttribute('class', 'btn btn-primary');
            submit.setAttribute('type', "submit");
            submit.setAttribute('value', "gridify");
            form.appendChild(submit);
            document.getElementById('content1').appendChild(form);
        }
    };
    Page3Component.prototype.actionForm = function () {
        var self = this;
        function getFormData2Object(form) {
            var un_array = form.serializeArray();
            var _array = {};
            __WEBPACK_IMPORTED_MODULE_6_jquery__["map"](un_array, function (n, i) {
                if (n.name.indexOf('[') > -1) {
                    var array = n.name.match(/\[(.*?)\]/);
                    var key = n.name.replace(array[1], "").replace('[', "").replace(']', "");
                    if (!_array[key]) {
                        _array[key] = {};
                    }
                    _array[key][array[1]] = n['value'];
                }
                else {
                    _array[n['name']] = n['value'];
                }
            });
            return _array;
        }
        __WEBPACK_IMPORTED_MODULE_6_jquery__('form').submit(function () {
            var _this = this;
            //get form Data To Object
            this.objForm = getFormData2Object(__WEBPACK_IMPORTED_MODULE_6_jquery__('form'));
            if (this.objForm) {
                self.dataService.postData(this.objForm).subscribe(function (res) {
                    _this.data = res._body;
                    localStorage.setItem('data_filtered', _this.data);
                }, function (error) { return console.error(error); });
                self.route.navigate(['/grid']);
            }
        });
    };
    Page3Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-page3',
            template: __webpack_require__(711),
            styles: [__webpack_require__(710)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], Page3Component);
    return Page3Component;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/Frizou/Desktop/Angular2-BGFI/src/page3.component.js.map

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Frizou/Desktop/Angular2-BGFI/src/environment.js.map

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/Frizou/Desktop/Angular2-BGFI/src/polyfills.js.map

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 674:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 675:
/***/ function(module, exports) {

module.exports = ".table td, .table th {\n   text-align: center;\n   width: 25%;  \n}"

/***/ },

/***/ 676:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 677:
/***/ function(module, exports) {

module.exports = ".alert {\n\tz-index: 999;\n\tposition: fixed;\n\tbottom: 15px;\n\tleft: 25%;\n\twidth: 50%;\n\topacity: 0.9;\n}"

/***/ },

/***/ 679:
/***/ function(module, exports) {

module.exports = "<div class=\"container\" id=\"myDiv\">\n\n  <nav class=\"navbar navbar-dark bg-primary\">\n    <div class=\"nav navbar-nav\">\n      <a routerLink=\"/\" class=\"nav-item nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <i class=\"fa fa-home\"></i> Home\n      </a>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>"

/***/ },

/***/ 680:
/***/ function(module, exports) {

module.exports = "<div id=\"jqxgrid\">\n</div>\n"

/***/ },

/***/ 681:
/***/ function(module, exports) {

module.exports = "<div class=\"card\" >\n  <h4 class=\"card-header\">Select Param you want to filter</h4>\n  <div id=\"contentform\">\n    <div class=\"card-block\">\n      <div class=\"form-group\">\n      \n      <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"OnSubmit()\" style=\"display:inline\">\n          <table class=\"table table-bordered table-striped\">\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.one\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.two\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.three\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.four\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.five\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.six\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.seven\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.eight\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.nine\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.ten\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.eleven\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.twelve\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.thirteen\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.fourteen\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.fifteen\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.sixteen\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.seventeen\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.eighteen\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.nineteen\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n            <tr>\n              <td>\n                <select class=\"form-control\" (ngModelChange)=\"capt($event)\" [(ngModel)]=\"params.twenty\" [ngModelOptions]=\"{standalone: true}\">\n                  <option *ngFor=\"let param of params\" [ngValue]=\"param\">{{param}}</option>\n                </select>\n              </td>\n            </tr>\n          </table>\n            <button class=\"btn btn-primary\" type=\"submit\">Go</button>\n      </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 682:
/***/ function(module, exports) {

module.exports = "<h3>\n  Select the fields you want to filter ==>\n</h3>\n<div id=\"content\" class=\"form-group\"></div>"

/***/ },

/***/ 683:
/***/ function(module, exports) {

module.exports = "<div *ngIf=\"message.body\" class=\"alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <strong>Message:</strong> {{message.body}}\n</div>"

/***/ },

/***/ 703:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ },

/***/ 710:
/***/ function(module, exports) {

module.exports = "/*.table td, .table th {\n   text-align: center;\n   width: 25%;  \n}*/"

/***/ },

/***/ 711:
/***/ function(module, exports) {

module.exports = "<h3>Search : </h3>\n<div id =\"content1\" class=\"form-group\">\n</div>\n\n\n"

/***/ }

},[703]);
//# sourceMappingURL=main.bundle.map
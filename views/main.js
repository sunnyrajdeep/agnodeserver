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

/***/ "./src/app/add-project/add-project.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-project/add-project.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-project/add-project.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-project/add-project.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-4\">\n        <div class=\"col-md-8\">\n            <div class=\"card\">\n                <div class=\"card-header bg-white font-weight-bold\">\n                    Add Project\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"content\">\n                            <form (ngSubmit)=\"addProject()\" novalidate>\n                                <div class=\"col-md-12\">\n                                    <div class=\"col-md-8\">\n                                        <div class=\"form-group\">\n                                            <label> Project name</label>\n                                            <input [(ngModel)]=\"newProjectModel.project_name\" type=\"text\" class=\"form-control\" name=\"project_name\" placeholder=\"Project Name\">\n                                            \n                                            \n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label>Note</label>\n                                            <input [(ngModel)]=\"newProjectModel.note\" type=\"text\" class=\"form-control\" name=\"note\" placeholder=\"Note\">\n                                        </div>\n                                        <!-- <div class=\"form-group\">\n                                            <label>Vehicles Assigned</label>\n                                            <input fromControlName=\"vehicles_assigned\" type=\"text\" class=\"form-control\" name=\"vehicles_assigned\" placeholder=\"\">\n                                        </div> -->\n                                        <div class=\"form-group\">\n                                            <label>Description</label>\n                                            <input [(ngModel)]=\"newProjectModel.description\" type=\"text\" class=\"form-control\" name=\"description\" placeholder=\"description \">\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <button type=\"submit\" class=\"btn btn-simple\" type=\"submit\">Submit</button>\n                                    </div>\n                                </div>\n                            </form>\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/add-project/add-project.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-project/add-project.component.ts ***!
  \******************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _new_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../new-project */ "./src/app/new-project.ts");
/* harmony import */ var _nodeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nodeservice.service */ "./src/app/nodeservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(nodeserver) {
        this.nodeserver = nodeserver;
        this.newProjectModel = new _new_project__WEBPACK_IMPORTED_MODULE_1__["NewProject"]('', '', '');
    }
    AddProjectComponent.prototype.addProject = function () {
        var _this = this;
        console.log(this.newProjectModel);
        this.nodeserver.addProjectserv(this.newProjectModel)
            .subscribe(function (data) {
            _this.successMsg = 'data saved',
                console.log(data);
        });
    };
    AddProjectComponent.prototype.ngOnInit = function () {
    };
    AddProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/add-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.css */ "./src/app/add-project/add-project.component.css")],
            providers: [_nodeservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeserviceService"]]
        }),
        __metadata("design:paramtypes", [_nodeservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeserviceService"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/add-reading/add-reading.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-reading/add-reading.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-reading/add-reading.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-reading/add-reading.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n      <div class=\"card\">\n          <div class=\"card-header bg-white font-weight-bold\">\n              Add Reading\n          </div>\n          <div class=\"card-body\">\n              <div class=\"col-md-12\">\n                  <div class=\"content\">\n                      <form class=\"form-inline\" (ngSubmit)=\"addReading(addreadingForm.value)\" [formGroup]=\"addreadingForm\">\n                        <div class=\"form-group col-md-2\">\n                            <label>Vehicle Number</label>\n                            <select [(ngModel)]=\"vehicleNo\" formControlName=\"vehicle_no\" type=\"text\" class=\"form-control\" name=\"vehicle_no\">\n                                <option *ngFor=\"let hero of vehicle_numbers\" [value]=\"hero.vehicle_number\">{{hero.vehicle_number}}</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group col-md-2\">\n                            <label>Date of Journey</label>\n                            <input (focusout)=\"populateLastReading(vehicleNo)\" [(ngModel)]=\"dateOfJourney\" formControlName=\"date_of_journey\" type=\"date\" id=\"date_of_journey\" class=\"form-control\" name=\"date_of_journey\">\n                        </div>\n                        <div class=\"form-group col-md-2\">\n                                <label>Time</label>\n                                <input formControlName=\"time\" type=\"time\" class=\"form-control\" name=\"time\">\n                            </div>\n                        <div class=\"form-group col-md-2\">\n                            <label>Day Start Reading</label>\n                            <input [(ngModel)]=\"day_start_reading\" formControlName=\"day_start_reading\" type=\"number\" class=\"form-control\" name=\"day_start_reading\">\n                            \n                        </div>\n                        <div class=\"form-group col-md-2\">\n                            <label>Day End Reading</label>\n                            <input [(ngModel)]=\"day_end_reading\" formControlName=\"day_end_reading\" (focusout)=\"focusOutFunction()\" type=\"number\" class=\"form-control\" name=\"day_end_reading\" placeholder=\"\">\n                        </div>\n                        <div class=\"form-group col-md-2\">\n                            <label>Total Day Kms</label>\n                            <input [(ngModel)]=\"total_kms\" formControlName=\"day_kms\" type=\"text\" class=\"form-control\" name=\"day_kms\">\n                        </div>\n                        <div>\n                            <div class=\"form-group col-md-6\">\n                                <label>Locations Visited</label>\n                                <textarea  formControlName=\"locations_visited\" cols=\"20\" rows=\"2\" class=\"form-control\" name=\"locations_visited\"></textarea>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label>Remark</label>\n                                <textarea formControlName=\"remark\" cols=\"20\" rows=\"2\" class=\"form-control\" name=\"expense_for_maintenance\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <button type=\"submit\" class=\"btn btn-simple\" type=\"submit\">Submit</button>\n                            </div>\n                        </div>\n                      </form>\n                      {{successMsg}}\n                  </div>\n              </div>\n          </div>\n          <table>\n              \n          </table>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-reading/add-reading.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-reading/add-reading.component.ts ***!
  \******************************************************/
/*! exports provided: AddReadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReadingComponent", function() { return AddReadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nodeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nodeservice.service */ "./src/app/nodeservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddReadingComponent = /** @class */ (function () {
    function AddReadingComponent(nodeserver) {
        this.nodeserver = nodeserver;
        this.addreadingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            vehicle_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            date_of_journey: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            day_start_reading: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            day_end_reading: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            day_kms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            locations_visited: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    AddReadingComponent.prototype.focusOutFunction = function () {
        if (this.day_start_reading <= this.day_end_reading) {
            var totalkms = this.day_end_reading - this.day_start_reading;
            this.total_kms = totalkms.toString();
        }
        else {
            alert("Day end reading must be greater than or equal to day start reading");
        }
    };
    AddReadingComponent.prototype.populateLastReading = function (vehicleNo) {
        var _this = this;
        this.nodeserver.getLastRecord(vehicleNo)
            .subscribe(function (data) {
            _this.lastRecord = data;
            if (_this.dateOfJourney != _this.lastRecord.date_of_journey) {
                _this.day_start_reading = _this.lastRecord.day_end_reading;
                console.log("Day start reading: " + JSON.stringify(data));
            }
            else {
                alert("Reading for this vehical for this date:" + _this.lastRecord.date_of_journey + " is already added.");
                document.getElementById("date_of_journey").focus();
            }
        });
    };
    AddReadingComponent.prototype.records = function () {
        var _this = this;
        this.nodeserver.getRecords()
            .subscribe(function (data) {
            _this.readings = data;
        });
    };
    AddReadingComponent.prototype.addReading = function (val) {
        var _this = this;
        console.log(val);
        this.nodeserver.addReadingserv(val)
            .subscribe(function (data) {
            _this.successMsg = 'data saved',
                console.log(data);
            _this.addreadingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                vehicle_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                date_of_journey: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                day_start_reading: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                day_end_reading: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                day_kms: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                locations_visited: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
                remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
        });
    };
    AddReadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.records();
        this.nodeserver.getVehicleData()
            .subscribe(function (data) {
            console.log(data);
            _this.vehicle_numbers = data;
        });
    };
    AddReadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-reading',
            template: __webpack_require__(/*! ./add-reading.component.html */ "./src/app/add-reading/add-reading.component.html"),
            styles: [__webpack_require__(/*! ./add-reading.component.css */ "./src/app/add-reading/add-reading.component.css")]
        }),
        __metadata("design:paramtypes", [_nodeservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeserviceService"]])
    ], AddReadingComponent);
    return AddReadingComponent;
}());



/***/ }),

/***/ "./src/app/add-vehicle/add-vehicle.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-vehicle/add-vehicle.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-vehicle/add-vehicle.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-vehicle/add-vehicle.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-md-12\">\n<form [formGroup]=\"Userform\" (ngSubmit)=\"onSubmit(Userform.value)\">\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email</label>\n      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"Email\" placeholder=\"Enter email\">\n      \n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"Password\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">File</label>\n        <input type=\"file\" class=\"form-control\" id=\"file\" #UserImage formControlName=\"UserImage\">\n      </div>\n    \n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!Userform.valid\">Submit</button>\n  </form>\n</div> -->\n\n<div class=\"row mb-4\">\n  <div class=\"col-md-8\">\n      <div class=\"card\">\n          <div class=\"card-header bg-white font-weight-bold\">\n              Add Vehicle Data\n          </div>\n          <div class=\"card-body\">\n              <div class=\"col-md-12\">\n                  <div class=\"content\">\n                      <form #addVehiclform=\"ngForm\" (ngSubmit)=\"addVehicle()\">\n                          <div class=\"col-md-12\">\n                              <div class=\"col-md-8\">\n                                  <div class=\"form-group\">\n                                      <label>Vehicle Brand</label>\n                                      <input [(ngModel)]=\"newVehicleModel.vehicle_brand\" type=\"text\" class=\"form-control\" name=\"vehicle_no\" required>\n                                  </div>\n                                  <div class=\"form-group\">\n                                      <label>Vehicle Number</label>\n                                      <input hidden [(ngModel)]=\"newVehicleModel.vehicle_number\" type=\"text\" class=\"form-control\" name=\"vehicle_number\" required>\n                                      <div class=\"form-inline\">\n                                            <div class=\"col-md-2\">\n                                                <input type=\"text\" name=\"mh\" [(ngModel)]=\"vn_stat\" ng-maxlength=\"2\" ng-value=\"MH\" id=\"mh\" class=\"form-control vhcln\" required>\n                                            </div>\n                                            <div class=\"col-md-2\">\n                                                <input type=\"text\" name=\"dn\" [(ngModel)]=\"vn_dst\" ng-maxlength=\"2\" id=\"vn_dst\" class=\"form-control vhcln\" required>\n                                            </div>\n                                            <div class=\"col-md-2\">\n                                                <input type=\"text\" name=\"st\"  #st=\"ngModel\" [(ngModel)]=\"vn_sub\" maxlength=\"2\" id=\"vn_sub\" class=\"form-control vhcln\" required>\n                                                <small [class.is-invalid]=\"st.invalid && st.touched\" *ngIf=\"st.invalid && st.touched\">Required</small>\n                                            </div>\n                                            <div class=\"col-md-6\">\n                                                <input type=\"text\" name=\"vn\" [(ngModel)]=\"vn_number\" #vn=\"ngModel\" (focusout)=\"onfocusOut()\" id=\"\" class=\"form-control\" ng-maxlength=\"4\" required>\n                                                <small [class.is-invalid]=\"vn.invalid && vn.touched\" *ngIf=\"vn.invalid && vn.touched\">Required</small>\n                                            </div>\n                                        </div>\n                                  </div>\n                                  <div class=\"form-group\">\n                                      <label>Fuel Type</label>\n                                      <select [(ngModel)]=\"newVehicleModel.fuel_type\" type=\"number\" class=\"form-control\" name=\"day_start_reading\" required>\n                                        <option value=\"Petrol\">Petrol</option>\n                                        <option value=\"Disel\">Diesel</option>\n                                        <option value=\"CNG\">CNG</option>\n                                      </select>\n                                  </div>\n                                  <div class=\"form-group\">\n                                    <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploaderTC\" />\n                                    <button type=\"button\" class=\"btn btn-success btn-s\" \n                                    (click)=\"uploaderTC.uploadAll()\">\n                                        Upload TC Image\n                                    </button>\n                                    {{newVehicleModel.tc}}\n                                </div>\n                                <div class=\"form-group\">\n                                  <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploaderRC\" />\n                                  <button type=\"button\" class=\"btn btn-success btn-s\" \n                                  (click)=\"uploaderRC.uploadAll()\">\n                                      Upload RC Image\n                                  </button>\n                                  {{newVehicleModel.rc}}\n                                </div>\n                                  <div class=\"form-group\">\n                                  <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploaderPUC\" />\n                                  <button type=\"button\" class=\"btn btn-success btn-s\" \n                                  (click)=\"uploaderPUC.uploadAll()\">\n                                      Upload PUC Image\n                                  </button>\n                                  {{newVehicleModel.puc}}\n                                </div>\n                                  <div class=\"form-group\">\n                                  <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploaderFC\" />\n                                  <button type=\"button\" class=\"btn btn-success btn-s\" \n                                  (click)=\"uploaderFC.uploadAll()\">\n                                      Upload Fitness  Image\n                                  </button>\n                                  {{newVehicleModel.fc}}\n                                </div>\n                                  <div class=\"form-group\">\n                                  <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploaderIC\" />\n                                  <button type=\"button\" class=\"btn btn-success btn-s\" \n                                  (click)=\"uploaderIC.uploadAll()\">\n                                      Upload Insurence Image\n                                  </button>\n                                  {{newVehicleModel.ic}}\n                                </div>\n                                  <div class=\"form-group\">\n                                    <input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploaderInvoice\" />\n                                    <button type=\"button\" class=\"btn btn-success btn-s\" \n                                    (click)=\"uploaderInvoice.uploadAll()\">\n                                        Upload Invoice Image\n                                    </button>\n                                    {{newVehicleModel.invoice}}\n                                </div>\n                                  <div class=\"form-group\">\n                                      <label>Driver Name</label>\n                                      <input [(ngModel)]=\"newVehicleModel.driver_name\" type=\"text\" class=\"form-control\" name=\"driver_name\" placeholder=\"Driver Name\">\n                                  </div>\n                                  <div class=\"form-group\">\n                                    <label>Driver's Mobile No.</label>\n                                    <input [(ngModel)]=\"newVehicleModel.driver_mobile_number\" type=\"text\" class=\"form-control\" name=\"driver_mobile_number\">\n                                  </div>\n                                  <div class=\"form-group\">\n                                    <label>Initial Reading</label>\n                                    <input [(ngModel)]=\"newVehicleModel.initial_reading\" type=\"text\" class=\"form-control\" name=\"initial_reading\">\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                                  <button [disabled]=\"addVehiclform.form.invalid\" type=\"submit\" class=\"btn btn-simple\" type=\"submit\">Submit</button>\n                              </div>\n                          </div>\n                      </form>\n                      {{successMsg}}\n                      \n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-vehicle/add-vehicle.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-vehicle/add-vehicle.component.ts ***!
  \******************************************************/
/*! exports provided: AddVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicleComponent", function() { return AddVehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nodeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nodeservice.service */ "./src/app/nodeservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _new_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../new-project */ "./src/app/new-project.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var URL = 'http://localhost:8081/api/upload';
var AddVehicleComponent = /** @class */ (function () {
    function AddVehicleComponent(nodeserver, router, activatedRoute, location) {
        this.nodeserver = nodeserver;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.vn_stat = "MH";
        this.vn_dst = "12";
        this.fileurl = "http://localhost:8081/views/uploads?imagename="; // vehicleDoc-1535987624968..jpg
        this.newVehicleModel = new _new_project__WEBPACK_IMPORTED_MODULE_4__["newVehicle"]('', '', '', '', '', '', '', '', '', '', '', '');
        this.uploaderTC = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: URL, itemAlias: 'vehicleDoc' });
        this.uploaderRC = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: URL, itemAlias: 'vehicleDoc' });
        this.uploaderPUC = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: URL, itemAlias: 'vehicleDoc' });
        this.uploaderFC = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: URL, itemAlias: 'vehicleDoc' });
        this.uploaderIC = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: URL, itemAlias: 'vehicleDoc' });
        this.uploaderInvoice = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: URL, itemAlias: 'vehicleDoc' });
    }
    AddVehicleComponent.prototype.onfocusOut = function () {
        if (this.vn_sub && this.vn_number) {
            this.newVehicleModel.vehicle_number = this.vn_stat + "-" + this.vn_dst + "-" + this.vn_sub + "-" + this.vn_number;
        }
        else {
            alert("Enter Vehicle No.");
        }
    };
    AddVehicleComponent.prototype.addVehicle = function () {
        var _this = this;
        console.log(this.newVehicleModel);
        this.nodeserver.addVehicleserv(this.newVehicleModel)
            .subscribe(function (data) {
            _this.successMsg = 'data saved',
                console.log(data);
            alert("Data saved");
            _this.router.navigate(['../vehicle'], { relativeTo: _this.activatedRoute });
        });
    };
    AddVehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        // TC
        this.uploaderTC.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploaderTC.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            _this.uploadedFileResponse = response;
            console.log(item.url);
            if (status === 200) {
                alert('File uploaded successfully');
                _this.newVehicleModel.tc = _this.fileurl + response;
            }
            else {
                alert("Upload Failed");
            }
        };
        // RC
        this.uploaderRC.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploaderRC.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            if (status === 200) {
                alert('File uploaded successfully');
                _this.newVehicleModel.rc = _this.fileurl + response;
            }
            else {
                alert("Upload Failed");
            }
        };
        // PUC
        this.uploaderPUC.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploaderPUC.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            if (status === 200) {
                alert('File uploaded successfully');
                _this.newVehicleModel.puc = _this.fileurl + response;
            }
            else {
                alert("Upload Failed");
            }
        };
        //Fitness
        this.uploaderFC.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploaderFC.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            if (status === 200) {
                alert('File uploaded successfully');
                _this.newVehicleModel.fc = _this.fileurl + response;
            }
            else {
                alert("Upload Failed");
            }
        };
        //  IC
        this.uploaderIC.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploaderIC.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            if (status === 200) {
                alert('File uploaded successfully');
                _this.newVehicleModel.ic = _this.fileurl + response;
            }
            else {
                alert("Upload Failed");
            }
        };
        // Invoice
        this.uploaderInvoice.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploaderInvoice.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            if (status === 200) {
                alert('File uploaded successfully');
                _this.newVehicleModel.invoice = _this.fileurl + response;
            }
            else {
                alert("Upload Failed");
            }
        };
    }; // end ngOnInit
    AddVehicleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-vehicle',
            template: __webpack_require__(/*! ./add-vehicle.component.html */ "./src/app/add-vehicle/add-vehicle.component.html"),
            styles: [__webpack_require__(/*! ./add-vehicle.component.css */ "./src/app/add-vehicle/add-vehicle.component.css")],
            providers: [_nodeservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeserviceService"]],
        }),
        __metadata("design:paramtypes", [_nodeservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], AddVehicleComponent);
    return AddVehicleComponent;
}());

//   successMsg;
//   Userform: FormGroup;
//   userImageFile: File;
//   @ViewChild('UserImage') User_image;
//   constructor(private fb: FormBuilder, 
//     private nodeserver:NodeserviceService,  
//     private router: Router,
//     private activatedRoute: ActivatedRoute) 
//     {
//      this.Userform = this.fb.group({
//         'Email':['',Validators.required],
//         'Password': ['',Validators.required],
//         'UserImage': ['',Validators.required]
//      });
//    }
//    checkLogin(){
//     if(localStorage.login){
//       var logs= JSON.parse(localStorage.getItem("login"));
//       //console.log(logs);
//       if(logs.loggedin===true){
//         console.log(logs);
//         //alert("logged in")
//         //this.router.navigate(['../home'],{relativeTo:this.activatedRoute})
//       }
//       else{
//         alert("Login Please");
//         this.router.navigate([''],{relativeTo:this.activatedRoute})
//       }
//     }
//     else{
//       this.router.navigate([''],{relativeTo:this.activatedRoute})
//     }
//   }
//    onSubmit(val){
//     console.log(val);
//     this.nodeserver.addProjectserv(val)
//     .subscribe(
//       (data) => {this.successMsg= 'data saved',
//         console.log(data);
//       }
//     );     
//    }
//   ngOnInit() {
//     this.checkLogin();
//   }
// }


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <nav class=\"navbar navbar-expand navbar-dark bg-primary\">\n    <a class=\"sidebar-toggle mr-3\" href=\"#\"><i class=\"fa fa-bars\"></i></a>\n    <a class=\"navbar-brand\" href=\"#\">Admin</a>\n\n    <div class=\"navbar-collapse collapse\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\"><i class=\"fa fa-envelope\"></i> 5</a></li>\n            <li class=\"nav-item\"><a href=\"#\" class=\"nav-link\"><i class=\"fa fa-bell\"></i> 3</a></li>\n            <li class=\"nav-item dropdown\">\n                <a href=\"#\" id=\"dd_user\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i> </a>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dd_user\">\n                    <a href=\"#\" class=\"dropdown-item\">Profile</a>\n                    <a href=\"#\" (click)=\"logout()\" class=\"dropdown-item\">Logout</a>\n                </div>\n            </li>\n        </ul>\n    </div>\n  </nav>\n  <div class=\"d-flex\">\n    <div class=\"sidebar sidebar-dark bg-dark\">\n        <ul class=\"list-unstyled\">\n            <li class=\"active\"><a routerLink=\"/\"><i class=\"fa fa-fw fa-tachometer-alt\"></i> Dashboard</a></li>\n            <li>\n                <a href=\"#sm_base\" data-toggle=\"collapse\">\n                    <i class=\"fa fa-fw fa-cube\"></i>Readings\n                </a>\n                <ul id=\"sm_base\" class=\"list-unstyled collapse\"> \n                    <li><a href=\"/add-reading\">Add Reading</a></li> \n                    <li><a href=\"/readings\">Readings</a></li> \n                </ul> \n            </li>\n            <li>\n              <a href=\"#projectLinks\"  data-toggle=\"collapse\">\n                <i class=\"fa fa-fw fa-flag\"></i> Projects\n              </a>\n              <ul id=\"projectLinks\" class=\"list-unstyled collapse\"> \n                <li><a routerLink=\"/projects\" routerLink=\"/add-project\">Projects</a></li>\n                <li><a routerLink=\"/add-project\">Add Projects</a></li> \n              </ul>\n            </li>\n            <li><a href=\"#vehicleLinks\" data-toggle=\"collapse\"><i class=\"fa fa-fw fa-toggle-on\"></i> Vehicles</a>\n                <ul id=\"vehicleLinks\" class=\"list-unstyled collapse\"> \n                    <li><a routerLink=\"/vehicle\">Vehicles</a></li> \n                    <li><a routerLink=\"/add-vehicle\">Add Vehicles</a></li>\n               </ul>\n            </li>\n            <!-- <li><a href=\"https://bootadmin.net/demo/docs\"><i class=\"fa fa-fw fa-book\"></i> Documentation</a></li> -->\n        </ul>\n    </div>\n    <router-outlet></router-outlet>\n  </div>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'project';
    }
    AppComponent.prototype.logout = function () {
        var logs = JSON.parse(localStorage.getItem("login"));
        logs.loggedin = false;
        localStorage.setItem("login", JSON.stringify(logs));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehicle/vehicle.component */ "./src/app/vehicle/vehicle.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-vehicle/add-vehicle.component */ "./src/app/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-project/add-project.component */ "./src/app/add-project/add-project.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _nodeservice_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nodeservice.service */ "./src/app/nodeservice.service.ts");
/* harmony import */ var _add_reading_add_reading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add-reading/add-reading.component */ "./src/app/add-reading/add-reading.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
    },
    {
        path: 'add-reading',
        component: _add_reading_add_reading_component__WEBPACK_IMPORTED_MODULE_13__["AddReadingComponent"]
    },
    {
        path: 'vehicle',
        component: _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__["VehicleComponent"]
    },
    {
        path: 'add-vehicle',
        component: _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_9__["AddVehicleComponent"]
    },
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"]
    },
    {
        path: 'add-project',
        component: _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_10__["AddProjectComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"]
    },
    {
        path: 'home',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__["VehicleComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_9__["AddVehicleComponent"],
                _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_10__["AddProjectComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _add_reading_add_reading_component__WEBPACK_IMPORTED_MODULE_13__["AddReadingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__["FileSelectDirective"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [
                _nodeservice_service__WEBPACK_IMPORTED_MODULE_12__["NodeserviceService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content p-4\">\n  <div class=\"text-center mb-4\">\n          \n  </div>\n    \n  <h2 class=\"mb-4\">Dashboard</h2>\n\n  <div class=\"row mb-4\">\n    <div class=\"col-md\">\n        <div class=\"d-flex border\">\n            <div class=\"bg-primary text-light p-4\">\n                <div class=\"d-flex align-items-center h-100\">\n                    <i class=\"fa fa-3x fa-fw fa-cog\"></i>\n                </div>\n            </div>\n            <div class=\"flex-grow-1 bg-white p-4\">\n                <p class=\"text-uppercase text-secondary mb-0\">Total Vehicles</p>\n                <h3 class=\"font-weight-bold mb-0\">25</h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md\">\n        <div class=\"d-flex border\">\n            <div class=\"bg-success text-light p-4\">\n                <div class=\"d-flex align-items-center h-100\">\n                    <i class=\"fa fa-3x fa-fw fa-comments\"></i>\n                </div>\n            </div>\n            <div class=\"flex-grow-1 bg-white p-4\">\n                <p class=\"text-uppercase text-secondary mb-0\">Projects</p>\n                <h3 class=\"font-weight-bold mb-0\">34</h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md\">\n        <div class=\"d-flex border\">\n            <div class=\"bg-danger text-light p-4\">\n                <div class=\"d-flex align-items-center h-100\">\n                    <i class=\"fa fa-3x fa-fw fa-shopping-cart\"></i>\n                </div>\n            </div>\n            <div class=\"flex-grow-1 bg-white p-4\">\n                <p class=\"text-uppercase text-secondary mb-0\">Yesterday's Reading</p>\n                <h3 class=\"font-weight-bold mb-0\">73,829</h3>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md\">\n        <div class=\"d-flex border\">\n            <div class=\"bg-info text-light p-4\">\n                <div class=\"d-flex align-items-center h-100\">\n                    <i class=\"fa fa-3x fa-fw fa-users\"></i>\n                </div>\n            </div>\n            <div class=\"flex-grow-1 bg-white p-4\">\n                <p class=\"text-uppercase text-secondary mb-0\">Customers</p>\n                <h3 class=\"font-weight-bold mb-0\">1,683</h3>\n            </div>\n        </div>\n    </div>\n  </div>          \n\n  <div class=\"row mb-4\">\n    <div class=\"col-md-8\">\n        <div class=\"card\">\n            <div class=\"card-header bg-white font-weight-bold\">\n                Sales vs. Expenses\n            </div>\n            <div class=\"card-body\">\n                <div id=\"chart_div_3\" style=\"width: 100%; height: 322px;\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-header bg-white font-weight-bold\">\n                Goals Completed\n            </div>\n            <div class=\"card-body\">\n                <p class=\"mb-2\">Inventory Stocked</p>\n                <div class=\"progress mb-3\">\n                    <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 75%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">75%</div>\n                </div>\n                <p class=\"mb-2\">Products Browsed</p>\n                <div class=\"progress mb-3\">\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 90%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">90%</div>\n                </div>\n                <p class=\"mb-2\">Products Sold</p>\n                <div class=\"progress mb-3\">\n                    <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 35%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">35%</div>\n                </div>\n                <p class=\"mb-2\">Product Back Order</p>\n                <div class=\"progress mb-3\">\n                    <div class=\"progress-bar bg-secondary\" role=\"progressbar\" style=\"width: 15%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">15%</div>\n                </div>\n                <p class=\"mb-2\">Payments Succeeded</p>\n                <div class=\"progress mb-3\">\n                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">100%</div>\n                </div>\n                <p class=\"mb-2\">Payments Failed</p>\n                <div class=\"progress\">\n                    <div class=\"progress-bar text-dark\" role=\"progressbar\" style=\"width: 0%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">0%</div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\" style=\"margin-left: auto;margin-right: auto\">\n  <form [formGroup]=\"Userform\" (ngSubmit)=\"onLogin(Userform.value)\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email</label>\n        <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"email\" placeholder=\"Enter email\">\n        \n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputPassword1\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"password\" placeholder=\"Password\">\n      </div>      \n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!Userform.valid\">Submit</button>\n    </form>\n  </div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nodeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nodeservice.service */ "./src/app/nodeservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, nodeserver, router, activatedRoute) {
        this.fb = fb;
        this.nodeserver = nodeserver;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.Userform = this.fb.group({
            'email': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    LoginComponent.prototype.checkLogin = function () {
        if (localStorage.login) {
            var logs = JSON.parse(localStorage.getItem("login"));
            //console.log(logs);
            if (logs.loggedin === true) {
                //console.log(logs);
                alert("logged in");
                this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
            }
            else {
                alert("Login Please");
            }
        }
        else {
            console.log("Login Please");
        }
    };
    LoginComponent.prototype.onLogin = function (val) {
        var _this = this;
        this.nodeserver.loginUser(val)
            .subscribe(function (data) {
            var replay = data;
            console.log(data);
            if (replay.code === 200) {
                _this.successMsg = 'logged in';
                _this.router.navigate(['../home'], { relativeTo: _this.activatedRoute });
                localStorage.setItem("login", JSON.stringify({ loggedin: true }));
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.checkLogin();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [_nodeservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeserviceService"]],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _nodeservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/new-project.ts":
/*!********************************!*\
  !*** ./src/app/new-project.ts ***!
  \********************************/
/*! exports provided: NewProject, newRecord, newVehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProject", function() { return NewProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newRecord", function() { return newRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newVehicle", function() { return newVehicle; });
var NewProject = /** @class */ (function () {
    function NewProject(project_name, note, description) {
        this.project_name = project_name;
        this.note = note;
        this.description = description;
    }
    return NewProject;
}());

var newRecord = /** @class */ (function () {
    function newRecord(vehicle_no, date_of_journey, day_start_reading, day_end_reading, locations_visited, drivers_mobile_no, day_kms, maintenance, expense_for_maintenance) {
        this.vehicle_no = vehicle_no;
        this.date_of_journey = date_of_journey;
        this.day_start_reading = day_start_reading;
        this.day_end_reading = day_end_reading;
        this.locations_visited = locations_visited;
        this.drivers_mobile_no = drivers_mobile_no;
        this.day_kms = day_kms;
        this.maintenance = maintenance;
        this.expense_for_maintenance = expense_for_maintenance;
    }
    return newRecord;
}());

var newVehicle = /** @class */ (function () {
    function newVehicle(vehicle_brand, vehicle_number, fuel_type, tc, rc, puc, fc, ic, invoice, driver_name, driver_mobile_number, initial_reading) {
        this.vehicle_brand = vehicle_brand;
        this.vehicle_number = vehicle_number;
        this.fuel_type = fuel_type;
        this.tc = tc;
        this.rc = rc;
        this.puc = puc;
        this.fc = fc;
        this.ic = ic;
        this.invoice = invoice;
        this.driver_name = driver_name;
        this.driver_mobile_number = driver_mobile_number;
        this.initial_reading = initial_reading;
    }
    return newVehicle;
}());



/***/ }),

/***/ "./src/app/nodeservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/nodeservice.service.ts ***!
  \****************************************/
/*! exports provided: NodeserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeserviceService", function() { return NodeserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeserviceService = /** @class */ (function () {
    function NodeserviceService(_http) {
        this._http = _http;
    }
    NodeserviceService.prototype.creatUser = function (body) {
        console.log("in service " + body);
        return this._http.post('http://localhost:8081/register', body);
    };
    NodeserviceService.prototype.loginUser = function (body) {
        console.log("in service " + body);
        return this._http.post('http://localhost:8081/login', body);
    };
    NodeserviceService.prototype.addProjectserv = function (body) {
        console.log("in service " + body);
        return this._http.post('http://localhost:8081/api/addProject', body);
    };
    NodeserviceService.prototype.addReadingserv = function (body) {
        console.log("in service " + body);
        return this._http.post('http://localhost:8081/api/addReading', body);
    };
    NodeserviceService.prototype.addVehicleserv = function (body) {
        console.log("in service " + body);
        return this._http.post('http://localhost:8081/api/addVehicle', body);
    };
    NodeserviceService.prototype.getVehicleData = function () {
        return this._http.get('http://localhost:8081/api/getVehicle');
    };
    NodeserviceService.prototype.getVehiclesData = function () {
        return this._http.get('http://localhost:8081/api/getVehicles');
    };
    NodeserviceService.prototype.getRecords = function () {
        return this._http.get('http://localhost:8081/api/getRecords');
    };
    NodeserviceService.prototype.getLastRecord = function (body) {
        console.log("in nodeservice :" + body);
        return this._http.get('http://localhost:8081/api/getLastRecord?vhn=' + body);
    };
    NodeserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NodeserviceService);
    return NodeserviceService;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-5\">\n    <div class=\"formbody\">\n        <form style=\"width:100%;\" (ngSubmit)=\"register(regform.value)\" [formGroup]=\"regform\">\n            <div class=\"header\">Add User</div>\n            <div>                \n                <input type=\"text\" formControlName=\"email\" matInput placeholder=\"Email\" id=\"email\" class=\"form-control\">\n                <span *ngIf=\"isValid('email')\">Entered email is invalid</span>\n            </div>\n            <div>\n               <input type=\"text\" formControlName=\"username\" matInput placeholder=\"Username\" id=\"user\" class=\"form-control\">\n                \n                <span *ngIf=\"isValid('username')\">Username is required</span>\n            </div>\n            <div>\n                <input type=\"password\" formControlName=\"password\" matInput placeholder=\"Password\" id=\"pass\" class=\"form-control\">\n                \n                <span *ngIf=\"isValid('password')\">Password is a mandatory field</span>\n            </div>\n            <div>\n                \n                    <input type=\"password\" formControlName=\"confirmPassword\" matInput placeholder=\"Re-enter Password\" id=\"cnfpass\" class=\"form-control\">\n                \n                <span *ngIf=\"isValid('confirmPassword')\">Password and confirm password should match</span>\n            </div>\n            <div style=\"margin-top:20px;\">\n                <button type=\"submit\" class=\"btn btn-success\" >Register</button>\n            </div>\n\n\n            <div style=\"text-align: center;\">                \n                {{successMsg}}\n            </div>\n        </form>\n    </div>\n\n    <div>\n        \n            <button class=\"btn btn-primary\" (click)=\"movetologin()\">Login</button>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _nodeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nodeservice.service */ "./src/app/nodeservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(nodeserver, router, activatedRoute) {
        var _this = this;
        this.nodeserver = nodeserver;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.regform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, this.passValidator)
        });
        this.regform.controls.password.valueChanges
            .subscribe(function (x) { return _this.regform.controls.confirmPassword.updateValueAndValidity(); });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.isValid = function (controlName) {
        return this.regform.get(controlName).invalid && this.regform.get(controlName).touched;
    };
    RegisterComponent.prototype.passValidator = function (control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            var confirmPasswordvalue = control.value;
            var passControl = control.root.get('password');
            if (passControl) {
                var passValue = passControl.value;
                if (passValue !== confirmPasswordvalue || passValue === '') {
                    return {
                        isError: true
                    };
                }
            }
        }
        return null;
    };
    RegisterComponent.prototype.register = function (v) {
        var _this = this;
        console.log(v);
        this.nodeserver.creatUser(v)
            .subscribe(function (data) {
            _this.successMsg = 'data saved';
            _this.movetologin();
        });
    };
    RegisterComponent.prototype.movetologin = function () {
        this.router.navigate([''], { relativeTo: this.activatedRoute });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")],
            providers: [_nodeservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeserviceService"]]
        }),
        __metadata("design:paramtypes", [_nodeservice_service__WEBPACK_IMPORTED_MODULE_2__["NodeserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/vehicle/vehicle.component.css":
/*!***********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/vehicle/vehicle.component.html":
/*!************************************************!*\
  !*** ./src/app/vehicle/vehicle.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-4\">\n  <div class=\"col-md-12\">\n      <div class=\"card\">\n          <div class=\"card-header bg-white font-weight-bold\">\n              Vehicles\n          </div>\n          <div class=\"card-body\">\n              <div class=\"col-md-12\">\n                  <div class=\"content\">\n                      <table class=\"table\">\n                          <thead class=\"thead-dark\">\n                            <tr>\n                              <th>Vehicle Number</th>\n                              <th>Vehicle Brand</th>\n                              <th>Fuel Type</th>\n                              <th>Driver Name</th>\n                              <th>Mobile No.</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                              <tr *ngFor=\"let vh of vehicledata\">\n                                  <td>{{vh.vehicle_number}}</td>\n                                  <td>{{vh.vehicle_brand}}</td>\n                                  <td>{{vh.fuel_type}}</td>\n                                  <td>{{vh.driver_name}}</td>\n                                  <td>{{vh.driver_mobile_number}}</td>\n                              </tr>\n                          </tbody>\n                      </table>\n                      \n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/vehicle/vehicle.component.ts":
/*!**********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.ts ***!
  \**********************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nodeservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nodeservice.service */ "./src/app/nodeservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleComponent = /** @class */ (function () {
    function VehicleComponent(nodeserver) {
        this.nodeserver = nodeserver;
    }
    VehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nodeserver.getVehiclesData()
            .subscribe(function (data) {
            _this.vehicledata = data;
            console.log(data);
        });
    };
    VehicleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle',
            template: __webpack_require__(/*! ./vehicle.component.html */ "./src/app/vehicle/vehicle.component.html"),
            styles: [__webpack_require__(/*! ./vehicle.component.css */ "./src/app/vehicle/vehicle.component.css")],
            providers: [_nodeservice_service__WEBPACK_IMPORTED_MODULE_1__["NodeserviceService"]]
        }),
        __metadata("design:paramtypes", [_nodeservice_service__WEBPACK_IMPORTED_MODULE_1__["NodeserviceService"]])
    ], VehicleComponent);
    return VehicleComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\sunny\practices\ag\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
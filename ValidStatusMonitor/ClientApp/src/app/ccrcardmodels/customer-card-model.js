"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var CustomerProps = /** @class */ (function () {
    function CustomerProps() {
        this._ccrType = ccr_card_model_1.CcrType.Customer;
    }
    Object.defineProperty(CustomerProps.prototype, "CcrType", {
        get: function () {
            return this._ccrType;
        },
        set: function (ct) {
            this._ccrType = ct;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "Message", {
        get: function () {
            return this._message;
        },
        set: function (msg) {
            this._message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "SeverityLevel", {
        get: function () {
            return this._severityLevel;
        },
        set: function (sl) {
            this._severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "ShowCard", {
        get: function () {
            return this._showCard;
        },
        set: function (sc) {
            this._showCard = sc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "StatusId", {
        get: function () {
            return this._statusId;
        },
        set: function (sid) {
            this._statusId = sid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "AppLink", {
        get: function () {
            return this._appLink;
        },
        set: function (pn) {
            this._appLink = pn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (pn) {
            this._name = pn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "PlantName", {
        get: function () {
            return this._plantName;
        },
        set: function (pn) {
            this._plantName = pn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "LastUpdate", {
        get: function () {
            return this._lastUpdate;
        },
        set: function (lu) {
            this._lastUpdate = lu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "CustomerId", {
        get: function () {
            return this._customerId;
        },
        set: function (ci) {
            this._customerId = ci;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "Description", {
        get: function () {
            return this._description;
        },
        set: function (d) {
            this._description = d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "Environment", {
        get: function () {
            return this._environment;
        },
        set: function (env) {
            this._environment = env;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "LicenceExpiryDate", {
        get: function () {
            return this._licenceExpiry;
        },
        set: function (le) {
            this._licenceExpiry = le;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "E2eTestUri", {
        get: function () {
            return this._e2eTestUri;
        },
        set: function (env) {
            this._e2eTestUri = env;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "BlackOut", {
        get: function () {
            return this._blackOut;
        },
        set: function (bo) {
            this._blackOut = bo;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerProps;
}());
exports.CustomerProps = CustomerProps;
//# sourceMappingURL=customer-card-model.js.map
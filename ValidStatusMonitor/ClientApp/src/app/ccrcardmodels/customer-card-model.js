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
    Object.defineProperty(CustomerProps.prototype, "Properties", {
        get: function () {
            var allProps = new Array();
            allProps.push(this._plantName);
            allProps.push(this._lastUpdate);
            allProps.push(this._customerId);
            allProps.push(this._description);
            allProps.push(this._environment);
            allProps.push(this._licenceExpiry);
            return allProps;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerProps;
}());
exports.CustomerProps = CustomerProps;
//# sourceMappingURL=customer-card-model.js.map
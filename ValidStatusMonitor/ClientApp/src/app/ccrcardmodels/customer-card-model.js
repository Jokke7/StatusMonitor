"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var CustomerProps = /** @class */ (function () {
    function CustomerProps() {
        this.ccrType = ccr_card_model_1.CcrType.Customer;
    }
    Object.defineProperty(CustomerProps.prototype, "CcrType", {
        get: function () {
            return this.ccrType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "Message", {
        get: function () {
            return this.message;
        },
        set: function (msg) {
            this.message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "SeverityLevel", {
        get: function () {
            return this.severityLevel;
        },
        set: function (sl) {
            this.severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "PlantName", {
        get: function () {
            return this.plantName;
        },
        set: function (pn) {
            this.plantName = pn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "LastUpdate", {
        get: function () {
            return this.lastUpdate;
        },
        set: function (lu) {
            this.lastUpdate = lu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "CustomerId", {
        get: function () {
            return this.customerId;
        },
        set: function (ci) {
            this.customerId = ci;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "Description", {
        get: function () {
            return this.description;
        },
        set: function (d) {
            this.description = d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerProps.prototype, "Environment", {
        get: function () {
            return this.environment;
        },
        set: function (env) {
            this.environment = env;
        },
        enumerable: true,
        configurable: true
    });
    return CustomerProps;
}());
exports.CustomerProps = CustomerProps;
//# sourceMappingURL=customer-card-model.js.map
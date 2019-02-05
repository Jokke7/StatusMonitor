"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var ApplicationProps = /** @class */ (function () {
    function ApplicationProps() {
        this.ccrType = ccr_card_model_1.CcrType.AppService;
    }
    Object.defineProperty(ApplicationProps.prototype, "CcrType", {
        get: function () {
            return this.ccrType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "Message", {
        get: function () {
            return this.message;
        },
        set: function (msg) {
            this.message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "SeverityLevel", {
        get: function () {
            return this.severityLevel;
        },
        set: function (sl) {
            this.severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "ApplicationName", {
        get: function () {
            return this.applicationName;
        },
        set: function (an) {
            this.applicationName = an;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "ApplicationInfo", {
        get: function () {
            return this.applicationInfo;
        },
        set: function (ai) {
            this.applicationInfo = ai;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "ApplicationVersion", {
        get: function () {
            return this.applicationVersion;
        },
        set: function (av) {
            this.applicationVersion = av;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "LicenceExpiryDate", {
        get: function () {
            return this.licenceExpiryDate;
        },
        set: function (led) {
            this.licenceExpiryDate = led;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "ApplicationServiceHealth", {
        get: function () {
            return this.applicationServiceHealth;
        },
        set: function (ash) {
            this.applicationServiceHealth = ash;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "DatabaseServiceLevel", {
        get: function () {
            return this.applicationServiceLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "ApplicationServiceLevel", {
        set: function (asl) {
            this.applicationServiceLevel = asl;
        },
        enumerable: true,
        configurable: true
    });
    return ApplicationProps;
}());
exports.ApplicationProps = ApplicationProps;
//# sourceMappingURL=application-card-model.js.map
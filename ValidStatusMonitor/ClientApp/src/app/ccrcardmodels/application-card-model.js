"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var ApplicationProps = /** @class */ (function () {
    function ApplicationProps() {
        this._ccrType = ccr_card_model_1.CcrType.AppService;
    }
    Object.defineProperty(ApplicationProps.prototype, "CcrType", {
        get: function () {
            return this._ccrType;
        },
        set: function (ct) {
            this._ccrType = ct;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "Message", {
        get: function () {
            return this._message;
        },
        set: function (msg) {
            this._message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "SeverityLevel", {
        get: function () {
            return this._severityLevel;
        },
        set: function (sl) {
            this._severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "ApplicationName", {
        get: function () {
            return this._applicationName;
        },
        set: function (an) {
            this._properties.push(an);
            this._applicationName = an;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "ApplicationInfo", {
        get: function () {
            return this._applicationInfo;
        },
        set: function (ai) {
            this._properties.push(ai);
            this._applicationInfo = ai;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "ApplicationVersion", {
        get: function () {
            return this._applicationVersion;
        },
        set: function (av) {
            this._properties.push(av);
            this._properties.push(av);
            this._applicationVersion = av;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "LicenceExpiryDate", {
        get: function () {
            return this._licenceExpiryDate;
        },
        set: function (led) {
            this._properties.push(led);
            this._licenceExpiryDate = led;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "ApplicationServiceHealth", {
        get: function () {
            return this._applicationServiceHealth;
        },
        set: function (ash) {
            this._properties.push(ash);
            this._applicationServiceHealth = ash;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "ApplicationServiceLevel", {
        get: function () {
            return this._applicationServiceLevel;
        },
        set: function (asl) {
            this._applicationServiceLevel = asl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationProps.prototype, "Properties", {
        get: function () {
            return this._properties;
        },
        enumerable: true,
        configurable: true
    });
    return ApplicationProps;
}());
exports.ApplicationProps = ApplicationProps;
//# sourceMappingURL=application-card-model.js.map
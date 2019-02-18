"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var CertificateProps = /** @class */ (function () {
    function CertificateProps() {
        this._ccrType = ccr_card_model_1.CcrType.Certificate;
    }
    Object.defineProperty(CertificateProps.prototype, "CcrType", {
        get: function () {
            return this._ccrType;
        },
        set: function (ct) {
            this._ccrType = ct;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CertificateProps.prototype, "Message", {
        get: function () {
            return this._message;
        },
        set: function (msg) {
            this._message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CertificateProps.prototype, "SeverityLevel", {
        get: function () {
            return this._severityLevel;
        },
        set: function (sl) {
            this._severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CertificateProps.prototype, "SslName", {
        get: function () {
            return this._sslName;
        },
        set: function (sn) {
            this._sslName = sn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CertificateProps.prototype, "SslExpiryDate", {
        get: function () {
            return this._sslExpiryDate;
        },
        set: function (sed) {
            this._sslExpiryDate = sed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CertificateProps.prototype, "SslStatus", {
        get: function () {
            return this._sslStatus;
        },
        set: function (ss) {
            this._sslStatus = ss;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CertificateProps.prototype, "Properties", {
        get: function () {
            var allProps = new Array();
            allProps.push(this._sslName);
            allProps.push(this._sslExpiryDate);
            allProps.push(this._sslStatus);
            return allProps;
        },
        enumerable: true,
        configurable: true
    });
    return CertificateProps;
}());
exports.CertificateProps = CertificateProps;
//# sourceMappingURL=certificate-card-model.js.map
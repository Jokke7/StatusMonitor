"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var CertificateProps = /** @class */ (function () {
    function CertificateProps() {
        this.ccrType = ccr_card_model_1.CcrType.Certificate;
    }
    Object.defineProperty(CertificateProps.prototype, "CcrType", {
        get: function () {
            return this.ccrType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CertificateProps.prototype, "Message", {
        get: function () {
            return this.message;
        },
        set: function (msg) {
            this.message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CertificateProps.prototype, "SeverityLevel", {
        get: function () {
            return this.severityLevel;
        },
        set: function (sl) {
            this.severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CertificateProps.prototype, "SslName", {
        get: function () {
            return this.sslName;
        },
        set: function (sn) {
            this.sslName = sn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CertificateProps.prototype, "SslExpiryDate", {
        get: function () {
            return this.sslExpiryDate;
        },
        set: function (sed) {
            this.sslExpiryDate = sed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CertificateProps.prototype, "SslStatus", {
        get: function () {
            return this.sslStatus;
        },
        set: function (ss) {
            this.sslStatus = ss;
        },
        enumerable: true,
        configurable: true
    });
    return CertificateProps;
}());
exports.CertificateProps = CertificateProps;
//# sourceMappingURL=certificate-card-model.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeverityLevel;
(function (SeverityLevel) {
    SeverityLevel["Informational"] = "INFO";
    SeverityLevel["Warning"] = "WARN";
    SeverityLevel["Immediate"] = "IMDT";
    SeverityLevel["Alert"] = "ALERT";
})(SeverityLevel = exports.SeverityLevel || (exports.SeverityLevel = {}));
var CcrType;
(function (CcrType) {
    CcrType["Customer"] = "Customer";
    CcrType["Certificate"] = "Certificates";
    CcrType["AppService"] = "Application";
    CcrType["Database"] = "Database";
    CcrType["Storage"] = "Storage";
    CcrType["Misc"] = "Other assets";
})(CcrType = exports.CcrType || (exports.CcrType = {}));
var CcrUtil = /** @class */ (function () {
    function CcrUtil() {
    }
    CcrUtil.toString = function (ct) {
        return CcrType[ct];
    };
    return CcrUtil;
}());
exports.CcrUtil = CcrUtil;
//# sourceMappingURL=ccr-card-model.js.map
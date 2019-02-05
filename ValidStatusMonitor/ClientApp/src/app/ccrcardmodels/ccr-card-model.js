"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeverityLevel;
(function (SeverityLevel) {
    SeverityLevel[SeverityLevel["Informational"] = 0] = "Informational";
    SeverityLevel[SeverityLevel["Warning"] = 1] = "Warning";
    SeverityLevel[SeverityLevel["Immediate"] = 2] = "Immediate";
    SeverityLevel[SeverityLevel["Alert"] = 3] = "Alert";
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
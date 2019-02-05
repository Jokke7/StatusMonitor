"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var MiscProps = /** @class */ (function () {
    //private sslName: string;
    //private sslExpiryDate: Date;
    //private sslStatus: string;
    function MiscProps() {
        this.ccrType = ccr_card_model_1.CcrType.Misc;
    }
    Object.defineProperty(MiscProps.prototype, "CcrType", {
        get: function () {
            return this.ccrType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiscProps.prototype, "Message", {
        get: function () {
            return this.message;
        },
        set: function (msg) {
            this.message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiscProps.prototype, "SeverityLevel", {
        get: function () {
            return this.severityLevel;
        },
        set: function (sl) {
            this.severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    return MiscProps;
}());
exports.MiscProps = MiscProps;
//# sourceMappingURL=misc-card-model.js.map
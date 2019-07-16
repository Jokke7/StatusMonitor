"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var SummaryProps = /** @class */ (function () {
    function SummaryProps() {
        this._ccrType = ccr_card_model_1.CcrType.Summary;
        this._severityLevel = ccr_card_model_1.SeverityLevel.Informational;
        this._message = "No tasks found!";
    }
    Object.defineProperty(SummaryProps.prototype, "CcrType", {
        get: function () {
            return this._ccrType;
        },
        set: function (ct) {
            this._ccrType = ct;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SummaryProps.prototype, "Message", {
        get: function () {
            return this._message;
        },
        set: function (msg) {
            this._message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SummaryProps.prototype, "SeverityLevel", {
        get: function () {
            return this._severityLevel;
        },
        set: function (sl) {
            this._severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SummaryProps.prototype, "ShowCard", {
        get: function () {
            return this._showCard;
        },
        set: function (sc) {
            this._showCard = sc;
        },
        enumerable: true,
        configurable: true
    });
    return SummaryProps;
}());
exports.SummaryProps = SummaryProps;
//# sourceMappingURL=summary-card-model.js.map
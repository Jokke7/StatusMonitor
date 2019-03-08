"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var MiscProps = /** @class */ (function () {
    function MiscProps() {
        this._ccrType = ccr_card_model_1.CcrType.Misc;
        this._enabled3dViewer = null;
        this._enabledPdfTron = null;
        this._message = null;
    }
    Object.defineProperty(MiscProps.prototype, "CcrType", {
        get: function () {
            return this._ccrType;
        },
        set: function (ct) {
            this._ccrType = ct;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiscProps.prototype, "Message", {
        get: function () {
            return this._message;
        },
        set: function (msg) {
            this._message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiscProps.prototype, "SeverityLevel", {
        get: function () {
            return this._severityLevel;
        },
        set: function (sl) {
            this._severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiscProps.prototype, "ShowCard", {
        get: function () {
            return this._showCard;
        },
        set: function (sc) {
            this._showCard = sc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiscProps.prototype, "EnabledPdfTron", {
        get: function () {
            return this._enabledPdfTron;
        },
        set: function (en) {
            this._enabledPdfTron = en;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MiscProps.prototype, "Enabled3dViewer", {
        get: function () {
            return this._enabled3dViewer;
        },
        set: function (en) {
            this._enabled3dViewer = en;
        },
        enumerable: true,
        configurable: true
    });
    return MiscProps;
}());
exports.MiscProps = MiscProps;
//# sourceMappingURL=misc-card-model.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var DatabaseProps = /** @class */ (function () {
    function DatabaseProps() {
        this._ccrType = ccr_card_model_1.CcrType.Database;
    }
    Object.defineProperty(DatabaseProps.prototype, "CcrType", {
        get: function () {
            return this._ccrType;
        },
        set: function (ct) {
            this._ccrType = ct;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "SeverityLevel", {
        get: function () {
            return this._severityLevel;
        },
        set: function (sl) {
            this._severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "Message", {
        get: function () {
            return this._message;
        },
        set: function (msg) {
            this._message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "ShowCard", {
        get: function () {
            return this._showCard;
        },
        set: function (sc) {
            this._showCard = sc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "DatabaseName", {
        get: function () {
            return this._databaseName;
        },
        set: function (dbn) {
            this._databaseName = dbn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "DatabaseServer", {
        get: function () {
            return this._databaseServer;
        },
        set: function (dbs) {
            this._databaseServer = dbs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "DatabaseVersion", {
        get: function () {
            return this._databaseVersion;
        },
        set: function (dbv) {
            this._databaseVersion = dbv;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "DatabaseTemplate", {
        get: function () {
            return this._databaseTemplate;
        },
        set: function (dbt) {
            this._databaseTemplate = dbt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "DatabaseSize", {
        get: function () {
            return this._databaseSize;
        },
        set: function (dbs) {
            this._databaseSize = dbs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "DatabaseServiceLevel", {
        get: function () {
            return this._databaseServiceLevel;
        },
        set: function (dbl) {
            this._databaseServiceLevel = dbl;
        },
        enumerable: true,
        configurable: true
    });
    return DatabaseProps;
}());
exports.DatabaseProps = DatabaseProps;
//# sourceMappingURL=database-card-model.js.map
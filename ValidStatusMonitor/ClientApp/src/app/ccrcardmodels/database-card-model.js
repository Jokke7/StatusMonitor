"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var DatabaseProps = /** @class */ (function () {
    function DatabaseProps() {
        this.ccrType = ccr_card_model_1.CcrType.Database;
    }
    Object.defineProperty(DatabaseProps.prototype, "CcrType", {
        get: function () {
            return this.ccrType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "Message", {
        get: function () {
            return this.message;
        },
        set: function (msg) {
            this.message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "SeverityLevel", {
        get: function () {
            return this.severityLevel;
        },
        set: function (sl) {
            this.severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "DatabaseName", {
        get: function () {
            return this.databaseName;
        },
        set: function (dbn) {
            this.databaseName = dbn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "DatabaseServer", {
        get: function () {
            return this.databaseServer;
        },
        set: function (dbs) {
            this.databaseServer = dbs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "DatabaseVersion", {
        get: function () {
            return this.databaseVersion;
        },
        set: function (dbv) {
            this.databaseVersion = dbv;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "DatabaseTemplate", {
        get: function () {
            return this.databaseTemplate;
        },
        set: function (dbt) {
            this.databaseTemplate = dbt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "DatabaseSize", {
        get: function () {
            return this.databaseSize;
        },
        set: function (dbs) {
            this.databaseSize = dbs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatabaseProps.prototype, "DatabaseServiceLevel", {
        get: function () {
            return this.databaseServiceLevel;
        },
        set: function (dbl) {
            this.databaseServiceLevel = dbl;
        },
        enumerable: true,
        configurable: true
    });
    return DatabaseProps;
}());
exports.DatabaseProps = DatabaseProps;
//# sourceMappingURL=database-card-model.js.map
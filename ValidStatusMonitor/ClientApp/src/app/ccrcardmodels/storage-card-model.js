"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var StorageProps = /** @class */ (function () {
    function StorageProps() {
        this._ccrType = ccr_card_model_1.CcrType.Storage;
    }
    Object.defineProperty(StorageProps.prototype, "CcrType", {
        get: function () {
            return this._ccrType;
        },
        set: function (ct) {
            this._ccrType = ct;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "SeverityLevel", {
        get: function () {
            return this._severityLevel;
        },
        set: function (sl) {
            this._severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "ShowCard", {
        get: function () {
            return this._showCard;
        },
        set: function (sc) {
            this._showCard = sc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "Message", {
        get: function () {
            return this._message;
        },
        set: function (msg) {
            this._message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "StorageAccountName", {
        get: function () {
            return this._storageAccountName;
        },
        set: function (san) {
            this._storageAccountName = san;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "StorageBlobNFiles", {
        get: function () {
            return this._storageBlobNFiles;
        },
        set: function (sbnf) {
            this._storageBlobNFiles = sbnf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "StorageBlobSizeMb", {
        get: function () {
            return this._storageBlobSizeMb;
        },
        set: function (sbsm) {
            this._storageBlobSizeMb = sbsm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "StorageServiceLevel", {
        get: function () {
            return this._storageServiceLevel;
        },
        set: function (ssl) {
            this._storageServiceLevel = ssl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "StorageServiceHealth", {
        get: function () {
            return this._storageServiceHealth;
        },
        set: function (ssh) {
            this._storageServiceHealth = ssh;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "ResourceLink", {
        get: function () {
            return this._resourceLink;
        },
        set: function (res) {
            this._resourceLink = res;
        },
        enumerable: true,
        configurable: true
    });
    return StorageProps;
}());
exports.StorageProps = StorageProps;
//# sourceMappingURL=storage-card-model.js.map
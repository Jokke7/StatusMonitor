"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("./ccr-card-model");
var StorageProps = /** @class */ (function () {
    function StorageProps() {
        this.ccrType = ccr_card_model_1.CcrType.Storage;
    }
    Object.defineProperty(StorageProps.prototype, "CcrType", {
        get: function () {
            return this.ccrType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "Message", {
        get: function () {
            return this.message;
        },
        set: function (msg) {
            this.message = msg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "SeverityLevel", {
        get: function () {
            return this.severityLevel;
        },
        set: function (sl) {
            this.severityLevel = sl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "StorageBlobNFiles", {
        get: function () {
            return this.storageBlobNFiles;
        },
        set: function (sbnf) {
            this.storageBlobNFiles = sbnf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "StorageBlobSizeMb", {
        get: function () {
            return this.storageBlobSizeMb;
        },
        set: function (sbsm) {
            this.storageBlobSizeMb = sbsm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "StorageServiceLevel", {
        get: function () {
            return this.storageServiceLevel;
        },
        set: function (ssl) {
            this.storageServiceLevel = ssl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageProps.prototype, "StorageServiceHealth", {
        get: function () {
            return this.storageServiceHealth;
        },
        set: function (ssh) {
            this.storageServiceHealth = ssh;
        },
        enumerable: true,
        configurable: true
    });
    return StorageProps;
}());
exports.StorageProps = StorageProps;
//# sourceMappingURL=storage-card-model.js.map
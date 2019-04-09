"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ccr_card_model_1 = require("../ccrcardmodels/ccr-card-model");
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.empty = function (data) {
        if (typeof (data) == 'number' || typeof (data) == 'boolean') {
            console.log(data);
            return false;
        }
        if (typeof (data) == 'undefined' || data === null) {
            return true;
        }
        if (typeof (data.length) != 'undefined') {
            return data.length == 0;
        }
        var count = 0;
        for (var i in data) {
            if (data.hasOwnProperty(i)) {
                count++;
                console.log("Count " + i);
            }
            console.log("Count " + i);
        }
        return count == 0;
    };
    Util.DaysBetween = function (date1, date2) {
        var diff = Math.abs(date1.getTime() - date2.getTime());
        var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        return diffDays;
    };
    Util.AzureRmLink = function (card) {
        var empty = "";
        if (card.CcrType == ccr_card_model_1.CcrType.AppService) {
            var applicationCard = card;
            if (applicationCard.ApplicationName == 'okea-vnvalid') {
                return "https://portal.azure.com/#@Visionova.no/resource/subscriptions/181ed219-c44b-4fc0-a147-ca89ea5a60fd/resourceGroups/ValidProdApps/providers/Microsoft.Web/sites/okea-vnvalid/appServices";
            }
            if (applicationCard.ApplicationName == 'okea-vnvalid/test') {
                return "https://portal.azure.com/#@Visionova.no/resource/subscriptions/181ed219-c44b-4fc0-a147-ca89ea5a60fd/resourceGroups/ValidProdApps/providers/Microsoft.Web/sites/okea-vnvalid/slots/test/appServices";
            }
            if (applicationCard.ApplicationName == 'valid-core-dev') {
                return "https://portal.azure.com/#@Visionova.no/resource/subscriptions/181ed219-c44b-4fc0-a147-ca89ea5a60fd/resourceGroups/VN-APPSERVICE-DEV/providers/Microsoft.Web/sites/valid-core-dev/appServices";
            }
            if (applicationCard.ApplicationName == 'valid-core-test') {
                return "https://portal.azure.com/#@Visionova.no/resource/subscriptions/181ed219-c44b-4fc0-a147-ca89ea5a60fd/resourceGroups/VN-APPSERVICE-DEV/providers/Microsoft.Web/sites/valid-core-test/appServices";
            }
            return empty;
        }
        if (card.CcrType == ccr_card_model_1.CcrType.Database) {
            var databaseCard = card;
            if (databaseCard.DatabaseName == 'OkeaDra') {
                return "https://portal.azure.com/#@Visionova.no/resource/subscriptions/181ed219-c44b-4fc0-a147-ca89ea5a60fd/resourceGroups/VisioNovaProdDatabase/providers/Microsoft.Sql/servers/valid-prod/databases/OkeaDra/overview";
            }
        }
        return empty;
    };
    return Util;
}());
exports.Util = Util;
//# sourceMappingURL=util.js.map
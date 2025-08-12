"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.empty = function (data) {
        if (typeof (data) == 'number' || typeof (data) == 'boolean') {
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
            }
        }
        return count == 0;
    };
    Util.DaysFromNow = function (date) {
        return Math.ceil((date.getTime() - (new Date()).getTime()) / (1000 * 3600 * 24));
    };
    return Util;
}());
exports.Util = Util;
//# sourceMappingURL=util.js.map
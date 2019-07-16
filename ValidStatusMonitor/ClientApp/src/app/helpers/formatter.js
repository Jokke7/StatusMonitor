"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var Formatter = /** @class */ (function () {
    function Formatter() {
    }
    Formatter.toolTipNotification = function (msgs) {
        if (util_1.Util.empty(msgs)) {
            return "";
        }
        var formatted = "<ul style=\"padding-left:0px\">";
        for (var _i = 0, msgs_1 = msgs; _i < msgs_1.length; _i++) {
            var msg = msgs_1[_i];
            formatted += "<li>" + msg.toString() + "</li>";
        }
        formatted += "</ul>";
        return formatted;
    };
    return Formatter;
}());
exports.Formatter = Formatter;
//# sourceMappingURL=formatter.js.map
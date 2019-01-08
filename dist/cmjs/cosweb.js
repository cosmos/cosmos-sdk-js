"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keys_1 = require("./module/Keys/keys");
var HTTPEndpoint_1 = require("./util/HTTPEndpoint");
var CosWeb = /** @class */ (function () {
    function CosWeb(config) {
        this.config = config;
        this.http = new HTTPEndpoint_1.default(config);
    }
    Object.defineProperty(CosWeb.prototype, "Keys", {
        get: function () {
            return new keys_1.default(this);
        },
        enumerable: true,
        configurable: true
    });
    return CosWeb;
}());
exports.default = CosWeb;
//# sourceMappingURL=cosweb.js.map
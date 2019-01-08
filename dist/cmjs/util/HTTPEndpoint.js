"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var createAxioRequest = function (baseURL, timeout) {
    return axios_1.default.create({
        baseURL: baseURL,
        timeout: timeout
    });
};
var HTTPEndpoint = /** @class */ (function () {
    function HTTPEndpoint(config) {
        this.HTTPBaseURL = config.baseUrl;
        this.request = createAxioRequest("" + this.HTTPBaseURL, 30000);
    }
    return HTTPEndpoint;
}());
exports.default = HTTPEndpoint;
//# sourceMappingURL=HTTPEndpoint.js.map
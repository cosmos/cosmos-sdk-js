import axios from 'axios';
var createAxioRequest = function (baseURL, timeout) {
    return axios.create({
        baseURL: baseURL,
        timeout: timeout
    });
};
var HTTPEndpoint = /** @class */ (function () {
    function HTTPEndpoint(config) {
        this.HTTPBaseURL = config.baseUrl;
        this.request = createAxioRequest("" + process.env.BASE_API + this.HTTPBaseURL, 30000);
    }
    return HTTPEndpoint;
}());
export default HTTPEndpoint;
//# sourceMappingURL=HTTPEndpoint.js.map
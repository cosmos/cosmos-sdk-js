import Keys from './module/Keys/keys';
import HTTPEndpoint from './util/HTTPEndpoint';
var CosWeb = /** @class */ (function () {
    function CosWeb(config) {
        this.config = config;
        this.http = new HTTPEndpoint(config);
    }
    Object.defineProperty(CosWeb.prototype, "Keys", {
        get: function () {
            return new Keys(this);
        },
        enumerable: true,
        configurable: true
    });
    return CosWeb;
}());
export default CosWeb;
//# sourceMappingURL=cosweb.js.map
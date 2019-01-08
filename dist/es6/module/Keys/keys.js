var Keys = /** @class */ (function () {
    function Keys(cosweb) {
        this.cosweb = cosweb;
    }
    Keys.prototype.getAll = function () {
        return this.cosweb.http.request({
            url: '/keys'
        });
    };
    return Keys;
}());
export default Keys;
//# sourceMappingURL=keys.js.map
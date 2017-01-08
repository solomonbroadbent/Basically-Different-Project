"use strict";
var IndexRoute = (function () {
    function IndexRoute(request, response) {
        this._ejsFilePath = 'views/index.ejs';
        this.request = request;
        this.response = response;
    }
    IndexRoute.prototype.renderFile = function () {
        this.response.render(this._ejsFilePath);
    };
    return IndexRoute;
}());
exports.IndexRoute = IndexRoute;

"use strict";
var indexRoute = require("./indexRoute");
var MasterRoute = (function () {
    function MasterRoute(router) {
        var mainUrl = new RegExp('/');
        router.get(mainUrl, function (request, response) {
            var IndexRoute = new indexRoute.IndexRoute(request, response);
            IndexRoute.renderFile();
        });
    }
    return MasterRoute;
}());
exports.MasterRoute = MasterRoute;

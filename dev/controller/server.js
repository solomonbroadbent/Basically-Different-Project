"use strict";
var express = require("express");
var masterRoute = require("./routes/masterRoute");
var Server = (function () {
    function Server() {
        this.app = express();
        this.configure();
        this.routes();
        this.app.listen(8000);
    }
    Server.prototype.configure = function () {
        this.app.use(express.static('../../public'));
        this.app.set('views', '../../public/views');
        this.app.set('view engine', 'ejs');
    };
    Server.prototype.routes = function () {
        var router = new express.Router();
        var MasterRouter = new masterRoute.MasterRoute(router);
        this.app.use(router);
    };
    return Server;
}());
exports.Server = Server;
var StartServer = new Server();

/// <reference path="./indexRoute.ts"/>
import * as express from 'express';
import * as indexRoute from './indexRoute';
export class MasterRoute{
	constructor(router: express.Router){
		let mainUrl = new RegExp('/');
		router.get(mainUrl, function(request: express.Request, response: express.Response){
			let IndexRoute: indexRoute.IndexRoute = new indexRoute.IndexRoute(request, response);
			IndexRoute.renderFile();
		});
	}
}
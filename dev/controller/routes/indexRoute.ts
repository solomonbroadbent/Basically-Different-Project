import * as express from 'express';
export class IndexRoute{
	private _ejsFilePath: string = 'views/index.ejs';
	private request: express.Request;
	private response: express.Response;
	constructor(request: express.Request, response: express.Response){
		this.request = request;
		this.response = response;
	}
	public renderFile(){
		this.response.render(this._ejsFilePath);
	}
}
import * as express from 'express';
import * as masterRoute from './routes/masterRoute';
export class Server{
	constructor(){
		this.app = express();
		this.configure();
		this.routes();
		this.app.listen(8000);
	}
	public app: express.Application;
	public configure(){
		this.app.use(express.static('../../public'));
		this.app.set('views', '../../public/views');
		this.app.set('view engine', 'ejs');
	}
	private routes(){
		let router: express.Router = new express.Router();
		let MasterRouter: masterRoute.MasterRoute = new masterRoute.MasterRoute(router);
	}
}
let StartServer: Server = new Server();
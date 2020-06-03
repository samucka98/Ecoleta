import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsControler';

const routes = express.Router();
const pointsController = new PointsController();
const itemsCOntroller = new ItemsController();

routes.get('/items', itemsCOntroller.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

/**
 * Padroes de metodos de controller da comunidade
 * 
 * index: exibir os items
 * show: exibr unico item
 * create: criação
 * update: edição
 * delete: deleção
 */


export default routes;
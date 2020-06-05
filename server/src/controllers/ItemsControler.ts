import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://10.0.0.138:3333/uploads/${item.image}`
      };
    });
  
    return response.json(serializedItems);
  }
}

export default ItemController;

/**
 * Organização
 * 
 * Service pattern para logicas
 * Repository pattern (Data maper)
 */

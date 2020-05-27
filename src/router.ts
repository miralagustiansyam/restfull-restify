import { Server, Request, Response, Next } from "restify";

import Categories from "./controllers/Categories"

export default class Router {
  public routes(server: Server): void {
    server.get('/', (req: Request, res: Response, next: Next) => {
      res.send("Welcome To Restify");
      next();
    });

    server.get('/categories', Categories.index);
    server.get('/categories/:id', Categories.get);
    server.post('/categories', Categories.store);
    server.put('/categories/:id', Categories.updated);
    server.del('/categories/:id', Categories.deleted);
  }
}

import { Request, Response, Next } from "restify";
import errors from "restify-errors";

import IRepository from "../interface/IRepository";

class Categories implements IRepository{

  index(req: Request, res: Response, next: Next): void {
    res.send("Index Categories");
    return next();
  }

  get(req: Request, res: Response, next: Next): void {
    res.send(`Get Categories by Id : ${req.params.id}`);
    return next();
  }

  store(req: Request, res: Response, next: Next): void {
    res.send("Store Categories");
    return next();
  }

  updated(req: Request, res: Response, next: Next): void {
    res.send("Update Categories");
    return next();
  }

  deleted(req: Request, res: Response, next: Next): void {
    res.send("Deleted Categories");
    return next();
  }
}

export default new Categories();
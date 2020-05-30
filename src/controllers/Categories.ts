import { Request, Response, Next } from "restify";
import errors from "restify-errors";
import _ from "lodash";
import IRepository from "../interface/IRepository";

const db = require("../models/Categories");

class Categories implements IRepository{

  index(req: Request, res: Response, next: Next): void {
    db.find().then((payload: any) => {
      res.send(200, {
        status: true,
        statusCode: 200,
        message: "success",
        payload
      })
    });
    return next();
  }

  get(req: Request, res: Response, next: Next): void {
    db.findById({_id: req.params.id}).then((payload: any) => {
      if(_.isNull(payload)) { 
        return next( 
          new errors.ResourceNotFoundError("Resources Not Found") 
        ) 
      }
      
      res.send(200, {
        status: true,
        statusCode: 200,
        message: "success",
        payload
      });
      return next();
    }).catch((err: any) => {
      return next( 
        new errors.ResourceNotFoundError(err) 
      )
    });
  }

  store(req: Request, res: Response, next: Next): void {  
    const { title, description } = req.body;
    const Categories =  new db({
      title, description
    });

    Categories.save().then((payload: any) => {
      res.send(201, {
        status: true,
        statusCode: 201,
        message: "Insert data success",
        payload
      })

      return next();
    })
    .catch((err: any) => {
      return next( 
        new errors.InternalServerError("Some error occurred while creating the categorie")
      )
    });
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
import { Request, Response, Next } from "restify";

export default interface IRepository {
  index(req: Request, res: Response, next: Next): void;
  get(req: Request, res: Response, next: Next): void;
  store(req: Request, res: Response, next: Next): void;
  updated(req: Request, res: Response, next: Next): void;
  deleted(req: Request, res: Response, next: Next): void;
}
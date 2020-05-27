import restify, { Server, Request, Response, Next, createServer } from "restify";
import { config as dotenv } from "dotenv";

import Router from "./router";

class Main {
  public server: Server;

  constructor() {
    this.server = createServer({
      name: 'TypeScript',
      version: '1.0.0'
    });
    this.plugins();
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    this.server.use(restify.plugins.acceptParser(this.server.acceptable));
    this.server.use(restify.plugins.queryParser());
    this.server.use(restify.plugins.bodyParser());
  }

  protected routes(): void {
    new Router().routes(this.server);
  }
}

const server = new Main().server;
server.listen(process.env.PORT, (req: Request, res: Response, next: Next) => {
  console.log(`%s listening at %s, ${server.name} ${server.url} ${process.env.PORT}`)
})


import restify, { Server, Request, Response, Next, createServer } from "restify";
import { config as dotenv } from "dotenv";
import mongoose from "mongoose";

import Router from "./router";

class Main {
  public server: Server;

  constructor() {
    this.server = createServer();
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
const dev = process.env.NODE_ENV || "development";
const configure = require("./config/index")[dev];

mongoose.connect(configure.mongo.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( () => console.log(`Database connected : ${configure.mongo.url}`)
).catch( err => console.log(err));

server.listen(process.env.PORT, (req: Request, res: Response, next: Next) => {
  console.log(`server name : ${configure.name}`);
  console.log(`%s listening at %s, server url : ${configure.base_url}`)
});

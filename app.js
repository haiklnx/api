import dotenv from 'dotenv';

dotenv.config();
import './src/database';
import express from 'express';
import homeRoute from './src/routes/indexRoute';

class App {
  constructor() {
    this.app = express();
    this.middleswares();
    this.routes();
  }

  middleswares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoute);
  }
}

export default new App().app;

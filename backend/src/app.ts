import express from 'express';
import cors from 'cors';

export default class App {
  public app = express();

  constructor() {
    this.init();
  }

  private init() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  public start(port: string | number) {
    this.app.listen(Number(port), () => {
      console.log(`app rodando na porta ${port}`);
    });
  }
}

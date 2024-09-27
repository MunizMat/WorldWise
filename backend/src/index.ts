/* ------------- External ------------ */
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { Server, createServer } from 'http';
import { config } from 'dotenv';

/* ------------- Routes ------------ */
import countryRoutes from './modules/country/country.routes';

config();

const port = process.env.PORT || 3001;

interface IExpressApp {
  app: Application;
  useMiddlewares: () => void;
  useRoutes: () => void;
}

class ExpressApp implements IExpressApp {
  app: Application;
  server: Server;
  constructor() {
    this.app = express();
    this.useMiddlewares();
    this.useRoutes();
    this.server = createServer(this.app);

    this.server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log(`http://localhost:${port}`);
    });
  }

  useMiddlewares() {
    this.app.use(cors({ origin: '*' }));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }
  useRoutes() {
    this.app.use('/countries', countryRoutes);
  }
}

new ExpressApp();

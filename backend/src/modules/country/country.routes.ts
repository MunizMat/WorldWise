import { Router } from 'express';
import { CountryController } from './country.controller';

const countryRoutes: Router = Router();

countryRoutes.get('/', CountryController.getAll);
countryRoutes.get('/:countryCode', CountryController.get);

export default countryRoutes;

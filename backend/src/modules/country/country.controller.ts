/* -------------- External --------------- */
import { Request, Response } from 'express';

/* -------------- Repositories --------------- */
import { CountryRepository } from './country.repository';

export class CountryController {
  static async getAll(req: Request, res: Response) {
    try {
      const countries = await CountryRepository.findAll();

      return res.json({
        countries,
      });
    } catch (error) {
      console.error(error);

      return res.json({ error: (error as Error).message });
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const { countryCode } = req.params;

      const country = await CountryRepository.findByCountryCode(countryCode);
      return res.json({ country });
    } catch (error) {
      console.error(error);

      return res.json({ error: (error as Error).message });
    }
  }
}

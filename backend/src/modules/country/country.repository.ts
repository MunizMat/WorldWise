/* ------------ Clients ------------ */
import { dateNagerClient } from '../../clients/dateNager';

/* ------------ Types ------------ */
import { GetAvailableCountriesOutput } from './country';

export class CountryRepository {
  static async findAll() {
    try {
      const { data } = await dateNagerClient.get<GetAvailableCountriesOutput>(
        '/AvailableCountries',
      );

      return data;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  static async findByCountryCode(countryCode: string) {
    console.log(countryCode);
  }
}

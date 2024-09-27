/* ------------ Clients ------------ */
import { CountriesNowClient } from '../../clients/countriesNow';
import { DateNagerClient } from '../../clients/dateNager';

export class CountryRepository {
  static async findAll() {
    try {
      const countries = await DateNagerClient.listAvailableCountries();

      return countries;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  static async findByCountryCode(countryCode: string) {
    try {
      const { borders, commonName, officialName, region } =
        await DateNagerClient.getCountryInfo(countryCode);

      const [flagImageData, populationData] = await Promise.all([
        CountriesNowClient.getCountryFlagImage(countryCode),
        CountriesNowClient.getCountryPopulationData(commonName),
      ]);

      return {
        flag: flagImageData.flag,
        countryCode,
        populationData: populationData.populationCounts,
        commonName,
        officialName,
        borders,
        region,
      };
    } catch (error) {
      console.error(error);

      throw error;
    }
  }
}

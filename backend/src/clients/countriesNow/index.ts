/* ------------- External ----------- */
import axios from 'axios';
import { config } from 'dotenv';

/* ------------- Types ----------- */
import {
  CountriesNowApiResponse,
  CountryFlagImageData,
  CountryPopulationData,
} from '../../modules/country/country';

config();

const client = axios.create({
  baseURL: process.env.COUNTRIES_NOW_API_URL,
});

export class CountriesNowClient {
  static async getCountryPopulationData(countryName: string) {
    const {
      data: { error, msg, data },
    } = await client.post<CountriesNowApiResponse<CountryPopulationData>>(
      '/countries/population',
      {
        country: countryName,
      },
    );

    if (error) throw new Error(msg);

    return data;
  }

  static async getCountryFlagImage(countryCode: string) {
    const {
      data: { error, msg, data },
    } = await client.post<CountriesNowApiResponse<CountryFlagImageData>>(
      '/countries/flag/images',
      {
        iso2: countryCode,
      },
    );

    if (error) throw new Error(msg);

    return data;
  }
}

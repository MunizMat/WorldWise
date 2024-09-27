/* ------------- External ----------- */
import axios from 'axios';
import { config } from 'dotenv';

/* ------------- Types ----------- */
import {
  GetAvailableCountriesOutput,
  GetCountryInfoOutput,
} from '../../modules/country/country';

config();

export const client = axios.create({
  baseURL: process.env.DATE_NAGER_API_URL,
});

export class DateNagerClient {
  static async getCountryInfo(countryCode: string) {
    const { data } = await client.get<GetCountryInfoOutput>(
      `/CountryInfo/${countryCode}`,
    );

    return data;
  }

  static async listAvailableCountries() {
    const { data } = await client.get<GetAvailableCountriesOutput>(
      '/AvailableCountries',
    );

    return data;
  }
}

/* ------------- Api Instance ----------- */
import { api } from '../api';

/* ------------- Types ----------- */
import {
  GetCountryDataInput,
  GetCountryDataOutput,
  ListCountriesOutput,
} from './types';

const listCountries = async () => {
  try {
    const { data } = await api.get<ListCountriesOutput>('/countries');

    return data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

const getCountryData = async ({ countryCode }: GetCountryDataInput) => {
  try {
    const { data } = await api.get<GetCountryDataOutput>(
      `/countries/${countryCode}`
    );

    return data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

export { listCountries, getCountryData };

/* ------------- Api Instance ----------- */
import { api } from '../api';

/* ------------- Types ----------- */
import { ListCountriesOutput } from './types';

const listCountries = async () => {
  try {
    const { data } = await api.get<ListCountriesOutput>('/countries');

    return data;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

export { listCountries };

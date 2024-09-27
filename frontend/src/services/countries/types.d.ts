import { DetailedCountryData } from '../../types/Country';

export interface ListCountriesOutput {
  countries: CountryData[];
}

export interface GetCountryDataInput {
  countryCode: string;
}
export interface GetCountryDataOutput {
  country: DetailedCountryData;
}

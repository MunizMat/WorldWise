export type GetAvailableCountriesOutput = Array<{
  countryCode: string;
  name: string;
}>;

export interface GetCountryInfoOutput {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: GetCountryInfoOutput[] | null;
}

interface PopulationCount {
  year: number;
  value: number;
}

interface CountryPopulationData {
  country: string;
  code: string;
  iso3: string;
  populationCounts: PopulationCount[];
}

export interface CountriesNowApiResponse<T> {
  error: boolean;
  msg: string;
  data: T;
}

export interface CountryFlagImageData {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

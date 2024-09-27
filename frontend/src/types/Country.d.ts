export interface CountryData {
  countryCode: string;
  name: string;
}

export interface PopulationCount {
  year: number;
  value: number;
}

export interface BorderData {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: GetCountryInfoOutput[] | null;
}

export interface DetailedCountryData {
  flag: string;
  countryCode: string;
  populationData: PopulationCount[];
  commonName: string;
  officialName: string;
  borders: BorderData[];
  region: string;
}

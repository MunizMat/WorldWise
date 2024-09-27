/* --------------- External ---------------- */
import React from 'react';

/* --------------- Modules ---------------- */
import { CountryListingModule } from '../src/modules/CountryListing';

/* --------------- Services ---------------- */
import { listCountries } from '../src/services/countries';

interface PageProps {
  countries: CountryData[];
}

export default function Page({ countries }: PageProps) {
  return <CountryListingModule countries={countries} />;
}

export async function getServerSideProps() {
  let countries: CountryData[] = [];

  try {
    const data = await listCountries();

    countries = data.countries;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      countries,
    },
  };
}

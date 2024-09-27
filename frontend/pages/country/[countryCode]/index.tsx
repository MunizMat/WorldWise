/* -------------- External -------------- */
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

/* -------------- Types -------------- */
import { DetailedCountryData } from '../../../src/types/Country';

/* -------------- Services -------------- */
import { getCountryData } from '../../../src/services/countries';
import { CountryDetailsModule } from '../../../src/modules/CountryDetails';

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  if (!query || !query.countryCode)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };

  const countryCode = query.countryCode as string;
  let countryData: DetailedCountryData;

  try {
    const { country } = await getCountryData({ countryCode });
    countryData = country;
  } catch (error) {
    console.error(error);

    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      countryData,
    },
  };
}

export default function Page({
  countryData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <CountryDetailsModule countryData={countryData} />;
}

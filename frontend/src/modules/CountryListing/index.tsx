/* -------------- External ------------- */
import { Flex, List, Text, Title } from '@mantine/core';
import Link from 'next/link';

/* -------------- Styles ------------- */
import styles from './CountryListing.module.css';

interface CountryData {
  countryCode: string;
  name: string;
}

const mockData: CountryData[] = [
  { countryCode: 'SE', name: 'Sweden' },
  { countryCode: 'SG', name: 'Singapore' },
  { countryCode: 'SI', name: 'Slovenia' },
  { countryCode: 'SJ', name: 'Svalbard and Jan Mayen' },
  { countryCode: 'SK', name: 'Slovakia' },
  { countryCode: 'SM', name: 'San Marino' },
  { countryCode: 'SR', name: 'Suriname' },
  { countryCode: 'SV', name: 'El Salvador' },
  { countryCode: 'TN', name: 'Tunisia' },
  { countryCode: 'TR', name: 'Turkey' },
  { countryCode: 'UA', name: 'Ukraine' },
  { countryCode: 'US', name: 'United States' },
  { countryCode: 'UY', name: 'Uruguay' },
  { countryCode: 'VA', name: 'Vatican City' },
  { countryCode: 'VE', name: 'Venezuela' },
  { countryCode: 'VN', name: 'Vietnam' },
  { countryCode: 'ZA', name: 'South Africa' },
  { countryCode: 'ZW', name: 'Zimbabwe' },
];

export const CountryListingModule = () => {
  return (
    <Flex gap={20} p={20} justify="center" align="center" direction="column">
      <Flex direction="column" w="100%" align="center" justify="center">
        <Title size={50} fw={400}>
          WorldWise
        </Title>

        <Text fw={300} fz={30}>
          Uncover the Stories Behind Every Country
        </Text>
      </Flex>

      <List className={styles.list}>
        {mockData.map(({ countryCode, name }) => (
          <List.Item fz={18} key={countryCode}>
            <Link href={`/country/${countryCode}`}>
              {name} - {countryCode}
            </Link>
          </List.Item>
        ))}
      </List>
    </Flex>
  );
};

/* -------------- External ------------- */
import { Flex, List, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { FC } from 'react';

/* -------------- Styles ------------- */
import styles from './CountryListing.module.css';

interface Props {
  countries: CountryData[];
}

export const CountryListingModule: FC<Props> = ({ countries }) => {
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
        {countries.map(({ countryCode, name }) => (
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

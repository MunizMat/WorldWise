/* -------------- External ------------- */
import { Flex, List, Text, Title } from '@mantine/core';
import { FC } from 'react';

/* -------------- Types ------------- */
import { CountryData } from '../../types/Country';

/* -------------- Components ------------- */
import { ListLink } from '../../components/ListLink';

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

        <Text className={styles.subtitle}>
          Uncover Information Behind Every Country
        </Text>
      </Flex>

      <List className={styles.list}>
        {countries.map(({ countryCode, name }) => (
          <ListLink
            key={countryCode}
            href={`/country/${countryCode}`}
            text={`${name} - ${countryCode}`}
          />
        ))}
      </List>
    </Flex>
  );
};

/* ------------- External ------------- */
import { FC } from 'react';
import { Flex, List, Paper, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { IconArrowLeft } from '@tabler/icons-react';
import { AreaChart } from '@mantine/charts';
import Link from 'next/link';

/* ------------- Types ------------- */
import { DetailedCountryData } from '../../types/Country';

/* ------------- Components ------------- */
import { ListLink } from '../../components/ListLink';

/* ------------- Styles ------------- */
import styles from './CountryDetails.module.css';

interface Props {
  countryData: DetailedCountryData;
}

export const CountryDetailsModule: FC<Props> = ({ countryData }) => {
  const { commonName, flag, borders, populationData } = countryData;

  return (
    <Flex className={styles.container}>
      <Link className={styles.back_link} href="/">
        <IconArrowLeft size={20} strokeWidth={1.4} />

        <Text>Back to countries list</Text>
      </Link>

      <Flex gap={20}>
        <Title fz={40}>{commonName}</Title>

        <Image alt={`${commonName} flag`} src={flag} width={180} height={90} />
      </Flex>

      <Flex className={styles.content_container}>
        <Flex className={styles.borders_container}>
          <Paper shadow="md" p={20} w="100%">
            <Text fz={20}>{commonName} borders with:</Text>

            <List w="max-content">
              {borders.map(({ commonName, countryCode }) => (
                <ListLink
                  key={countryCode}
                  href={`/country/${countryCode}`}
                  text={`${commonName} - ${countryCode}`}
                />
              ))}
            </List>
          </Paper>
        </Flex>

        <Flex className={styles.chart_container}>
          <Paper w="100%" shadow="md" p={20}>
            <Text mb={20} fz={20}>
              {commonName} population overtime:
            </Text>

            <AreaChart
              h={400}
              w="100%"
              data={populationData.map(({ value, year }) => ({
                year,
                Population: value,
              }))}
              dataKey="year"
              curveType="linear"
              valueFormatter={(value) =>
                new Intl.NumberFormat('en-US').format(value)
              }
              xAxisProps={{ angle: -20 }}
              series={[{ name: 'Population', color: 'blue.5' }]}
              px={20}
            />
          </Paper>
        </Flex>
      </Flex>
    </Flex>
  );
};

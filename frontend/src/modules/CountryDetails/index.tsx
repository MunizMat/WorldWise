/* ------------- External ------------- */
import { FC } from 'react';
import { Flex, List, Paper, Text, Title } from '@mantine/core';
import Image from 'next/image';

/* ------------- Types ------------- */
import { DetailedCountryData } from '../../types/Country';
import { AreaChart } from '@mantine/charts';
import { ListLink } from '../../components/ListLink';

interface Props {
  countryData: DetailedCountryData;
}

export const CountryDetailsModule: FC<Props> = ({ countryData }) => {
  const { commonName, flag, borders, populationData } = countryData;

  console.log(populationData);
  return (
    <Flex p={40} direction="column" gap={20}>
      <Flex gap={20}>
        <Title fz={40}>{commonName}</Title>

        <Image alt={`${commonName} flag`} src={flag} width={180} height={90} />
      </Flex>

      <Flex>
        <Paper shadow="md" p={20}>
          <Text fz={20}>{commonName} borders with:</Text>

          <List>
            {borders.map(({ commonName, countryCode, region }) => (
              <ListLink
                key={countryCode}
                href={`/country/${countryCode}`}
                text={`${commonName} - ${countryCode} - ${region}`}
              />
            ))}
          </List>
        </Paper>
      </Flex>

      <Flex w="100%">
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
            series={[{ name: 'Population', color: 'blue.5' }]}
            px={10}
          />
        </Paper>
      </Flex>
    </Flex>
  );
};

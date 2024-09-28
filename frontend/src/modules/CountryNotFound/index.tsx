/* ------------- External ------------- */
import { Center, Flex, Text } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

/* ------------- Styles ------------- */
import styles from '../CountryDetails/CountryDetails.module.css';

export const CountryNotFoundModule = () => {
  return (
    <Center h="100%" p={16}>
      <Flex direction="column" gap={16} align="center">
        <Text fz={20}>
          It seems we have do not have available data for this country yet.
          Please come back another time
        </Text>

        <Link className={styles.back_link} href="/">
          <IconArrowLeft size={20} strokeWidth={1.4} />

          <Text fz={16}>Back to countries list</Text>
        </Link>
      </Flex>
    </Center>
  );
};

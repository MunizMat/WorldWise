/* ----------- External ----------- */
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

/* ----------- Theme ----------- */
import { theme } from '../theme';

/* ----------- Assets ----------- */
import '../index.css';
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>WorldWise</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <Component {...pageProps} />
    </MantineProvider>
  );
}

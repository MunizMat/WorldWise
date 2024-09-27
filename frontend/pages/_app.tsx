import '@mantine/core/styles.css';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import '../index.css';
import '@mantine/dates/styles.css';
import { ModalsProvider } from '@mantine/modals';
import { GlobalProvider } from '../src/contexts';

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <GlobalProvider>
        <ModalsProvider>
          <Head>
            <title>WorldWise</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
            <link rel="shortcut icon" href="/favicon.svg" />
          </Head>

          <Component {...pageProps} />
        </ModalsProvider>
      </GlobalProvider>
    </MantineProvider>
  );
}

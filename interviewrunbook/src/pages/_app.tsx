import React from 'react';
import Head from 'next/head';
import NavigationBar from '../components/NavigationBar';
import Page from '../components/Page';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRouter} from 'next/router';
import Footer from '../components/Footer';
import GlobalStyles from '../styles/GlobalStyles';

// @ts-ignore
const Layout = ({children}) => <>{children}</>;

// eslint-disable-next-line react/prop-types
// @ts-ignore
export default function App({Component, pageProps}) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Bjj Surveys</title>
        {/* TODO: Add proper favicon */}
        <link rel="icon" href="/static/favicon.png"/>
      </Head>
      <NavigationBar {...router} />
      <section>
        <Page>
          <Component {...pageProps} />
        </Page>
      </section>
      <Footer/>
      <GlobalStyles/>
    </Layout>
  );
}

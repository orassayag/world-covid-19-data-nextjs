import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import settings from '../settings/settings';
import store from '../store/store';
import { timeUtils } from '../utils';

export default function Home() {
  debugger;
  const router = useRouter();
  const { COMPONENT_MODE } = settings;
  settings.ENVIRONMENT_MODE = process.env.NODE_ENV;
  const mode = router?.query?.mode || 'local';
  const int = router?.query?.int || '5';
  const componentName = COMPONENT_MODE.toLowerCase();
  const App = dynamic(() => import(`./${componentName}/${componentName}`), {
    ssr: false,
  });
  const component = (
    <App
      mode={mode}
      int={int}
    />);

  return (
    <Provider store={store}>
      <Head>
        <title data-rh="true">{`World Covid 19 Data | ${timeUtils.getTitleDate()}`}</title>
        <link rel="icon" href="/images/favicon.ico" />
        <link data-rh="true" rel="manifest" href="/images/manifest.json" />
        <meta data-rh="true" name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <meta data-rh="true" charSet="utf-8" />
        <meta data-rh="true" name="theme-color" content="#000000" />
        <meta data-rh="true" name="twitter:app:name:iphone" content="World Covid 19 Data" />
        <meta data-rh="true" name="twitter:app:id:iphone" content="" />
        <meta data-rh="true" property="al:ios:app_name" content="World Covid 19 Data" />
        <meta data-rh="true" property="al:ios:app_store_id" content="" />
        <meta data-rh="true" property="al:android:package" content="" />
        <meta data-rh="true" property="fb:app_id" content="" />
        <meta data-rh="true" property="og:site_name" content="World Covid 19 Data" />
        <meta data-rh="true" property="og:type" content="website" />
        <meta data-rh="true" name="title" content="World Covid 19 Data | Covid 19 World Data" />
        <meta data-rh="true" property="og:title" content="World Covid 19 Data | Covid 19 World Data" />
        <meta data-rh="true" property="twitter:title" content="World Covid 19 Data | Covid 19 World Data" />
        <meta data-rh="true" name="twitter:site" content="" />
        <meta data-rh="true" name="twitter:app:url:iphone" content="https://world-covid-19-data.herokuapp.com" />
        <meta data-rh="true" property="al:android:url" content="https://world-covid-19-data.herokuapp.com" />
        <meta data-rh="true" property="al:ios:url" content="https://world-covid-19-data.herokuapp.com" />
        <meta data-rh="true" property="al:android:app_name" content="World Covid 19 Data" />
        <meta data-rh="true" name="description" content="The client application's role is to contain the UI and display it to the user. World-covid-19-data is an application to display data of cases, deaths, and recovers for each country and are known in the world, from the 8 different APIs." />
        <meta data-rh="true" property="og:description" content="The client application's role is to contain the UI and display it to the user. World-covid-19-data is an application to display data of cases, deaths, and recovers for each country and are known in the world, from the 8 different APIs." />
        <meta data-rh="true" property="twitter:description" content="The client application's role is to contain the UI and display it to the user. World-covid-19-data is an application to display data of cases, deaths, and recovers for each country and are known in the world, from the 8 different APIs." />
        <meta data-rh="true" property="og:url" content="https://world-covid-19-data.herokuapp.com" />
        <meta data-rh="true" property="al:web:url" content="https://world-covid-19-data.herokuapp.com" />
        <meta data-rh="true" property="og:image" content="/images/android-chrome-512x512.png" />
        <meta data-rh="true" name="twitter:image:src" content="/images/android-chrome-512x512.png" />
        <meta data-rh="true" name="twitter:card" content="summary_large_image" />
        <meta data-rh="true" property="article:author" content="https://github.com/orassayag/world-covid-19-data" />
        <meta data-rh="true" name="twitter:creator" content="Or Assayag" />
        <meta data-rh="true" name="author" content="Or Assayag" />
        <meta data-rh="true" name="robots" content="index,follow,max-image-preview:large" />
        <meta data-rh="true" name="referrer" content="unsafe-url" />
        <meta data-rh="true" name="twitter:label1" value="World Covid 19 Data" />
        <meta data-rh="true" name="twitter:data1" value="World Covid 19 Data" />
        <meta data-rh="true" name="parsely-post-id" content="" />
        <link data-rh="true" rel="search" type="application/opensearchdescription+xml" title="World Covid 19 Data" href="/images/osd.xml" />
        <link data-rh="true" rel="apple-touch-icon" sizes="512x512" href="/images/android-chrome-512x512.png" />
        <link data-rh="true" rel="apple-touch-icon" sizes="192x192" href="/images/android-chrome-192x192.png" />
        <link data-rh="true" rel="apple-touch-icon" sizes="32x32" href="/images/favicon32x32.png" />
        <link data-rh="true" rel="apple-touch-icon" sizes="16x16" href="/images/favicon16x16.png" />
        <link data-rh="true" rel="mask-icon" href="/images/image2vector.svg" color="#ffffff" />
        <link data-rh="true" rel="author" href="https://github.com/orassayag/world-covid-19-data" />
        <link data-rh="true" rel="canonical" href="https://world-covid-19-data.herokuapp.com" />
        <link data-rh="true" rel="alternate" href="https://world-covid-19-data.herokuapp.com" />
      </Head>
      {component}
    </Provider>
  );
}

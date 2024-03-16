import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import type { ReactNode } from "react";
import React from "react";
import { Provider } from "react-redux";

import { store } from "../stores/store";
import "../styles/main.scss";


export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element) => ReactNode;
};

type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const title = `Admin One React Tailwind free`;
  const description = "Admin One - free React Next Tailwind dashboard with TypeScript and dark mode";
  const url = "https://justboil.github.io/admin-one-react-tailwind/";
  const image = `https://static.justboil.me/templates/one/repo-tailwind-react.png`;
  const imageWidth = "1920";
  const imageHeight = "960";

  return (
    <Provider store={ store }>
      {
        getLayout(
          <React.Fragment>
            <Head>
              <meta name="description" content={ description } />

              <meta property="og:url" content={ url } />
              <meta property="og:site_name" content="JustBoil.me" />
              <meta property="og:title" content={ title } />
              <meta property="og:description" content={ description } />
              <meta property="og:image" content={ image } />
              <meta property="og:image:type" content="image/png" />
              <meta property="og:image:width" content={ imageWidth } />
              <meta property="og:image:height" content={ imageHeight } />

              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:title" content={ title } />
              <meta property="twitter:description" content={ description } />
              <meta property="twitter:image:src" content={ image } />
              <meta property="twitter:image:width" content={ imageWidth } />
              <meta property="twitter:image:height" content={ imageHeight } />

              <link rel="icon" href="/admin-one-react-tailwind/favicon.png" />
            </Head>
            <Script src="https://www.googletagmanager.com/gtag/js?id=UA-130795909-1" strategy="afterInteractive" />

            <div style={{ textAlign: 'center', backgroundColor: '#161617', paddingTop: '20px', paddingBottom: '20px', fontSize: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button type="button" style={{ marginRight: '10px', minWidth: '100px' }}>Introduce</button>
                <button type="button" style={{ marginRight: '10px', minWidth: '100px' }}>Product</button>
                <button type="button" style={{ marginRight: '10px', minWidth: '100px' }}>Community</button>
                <button type="submit" style={{ minWidth: '100px' }}>Submit</button>
              </div>
            </div>




            <Script id="google-analytics" strategy="afterInteractive">
              {
                `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-130795909-1');
                `
              }
            </Script>

            <Component { ...pageProps } />
          </React.Fragment>
        )
      }
    </Provider>
  );
}

export default MyApp;

import "styles/globals.css";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import Web3ReactManager from "components/Web3ReactManager/index";
import dynamic from "next/dynamic";
import getLibrary from "functions/getLibrary";
import { Web3ModalProvider } from "context/Web3Modal";
import DefaultLayout from 'components/DefaultLayout'

const Web3ProviderNetwork = dynamic(
  () => import("../components/Web3ProviderNetwork/index"),
  { ssr: false }
)

export const metadata = {
  title: 'Web3 Template',
  description: 'Template for Web3 Projects'
}


function MyApp({ Component, pageProps })  {
    // Allows for conditionally setting a layout to be hoisted per page
    const Layout = Component.Layout || DefaultLayout

  return (
    // @ts-ignore TYPE NEEDS FIXING
    <Web3ReactProvider getLibrary={getLibrary}>
      {/* @ts-ignore TYPE NEEDS FIXING */}
      <Web3ModalProvider>
        {/* @ts-ignore TYPE NEEDS FIXING */}
        <Web3ProviderNetwork getLibrary={getLibrary}>
        <Layout>
          {/* @ts-ignore TYPE NEEDS FIXING */}
          <Web3ReactManager>
            {/* @ts-ignore TYPE NEEDS FIXING */}
            <Component {...pageProps} />
          </Web3ReactManager>
          </Layout>
        </Web3ProviderNetwork>
      </Web3ModalProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
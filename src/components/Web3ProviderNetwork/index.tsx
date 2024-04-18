import { createWeb3ReactRoot } from "@web3-react/core";

const Web3ReactRoot = createWeb3ReactRoot("NETWORK");

// @ts-ignore TYPE NEEDS FIXING
const Web3ProviderNetwork = ({ children, getLibrary }) => {
  // @ts-ignore TYPE NEEDS FIXING
  return <Web3ReactRoot getLibrary={getLibrary}>{children}</Web3ReactRoot>;
};

export default Web3ProviderNetwork;

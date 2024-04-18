import { useMemo } from "react";
import { useActiveWeb3React } from "hooks/useActiveWeb3React";
import { Web3Provider } from "@ethersproject/providers"; // JsonRpcSigner
import { AddressZero } from "@ethersproject/constants";
import { isAddress } from "utils/isAddress";
import { getProviderOrSigner } from "utils";
import { Contract } from "@ethersproject/contracts";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

// export const useExampleContract = (address: string, withSignerIfPossible = true) => {
//   return useContract(address, ContractAbi, withSignerIfPossible);
// };

// Multiple chains

// export const useBatchTransfer = (withSignerIfPossible?: boolean) => {
//   const { chainId } = useActiveWeb3React();
//   return useContract(getContractAddress(chainId), ContractAbi, withSignerIfPossible);
// };

// export function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
//   const { library, account } = useActiveWeb3React();
//   return useMemo(() => {
//     if (!address || address === AddressZero || !ABI || !library) return null;
//     try {
//       return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined);
//     } catch (error) {
//       console.error("Failed to get contract", error);
//       return null;
//     }
//   }, [address, ABI, library, withSignerIfPossible, account]);
// }

// returns null on errors
export function useContract(
  contractAddress: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | null {
  const { library } = useActiveWeb3React();
  const { address } = useWeb3ModalAccount()


  return useMemo(() => {
    if (!contractAddress || !ABI || !library) return null;
    try {
      return getContract(
        contractAddress,
        ABI,
        library,
        withSignerIfPossible && address ? address : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [contractAddress, ABI, library, withSignerIfPossible, address]);
}

// account is optional
export function getContract(
  contractAddress: string,
  ABI: any,
  library: Web3Provider,
  account?: string
): Contract {
  if (!isAddress(contractAddress) || contractAddress === AddressZero) {
    throw Error(`Invalid 'contractAddress' parameter '${contractAddress}'.`);
  }
  return new Contract(contractAddress, ABI, getProviderOrSigner(library, account));
}
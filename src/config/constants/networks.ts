import { ChainId } from './chainId'
// import { useActiveWeb3React } from 'services/web3'
export enum SupportedChainId {
  ETHEREUM = ChainId.ETHEREUM,
  //   TELOS = ChainId.TELOS,
  BASE = ChainId.BASE,
  BSC = ChainId.BSC,
  FANTOM = ChainId.FANTOM,
  AVALANCHE = ChainId.AVALANCHE,
  ARBITRUM = ChainId.ARBITRUM,
  //   MOONRIVER = ChainId.MOONRIVER,
  MATIC = ChainId.MATIC
}

export const ChainColor = {
  [ChainId.ETHEREUM]: '#627EEA',
  [ChainId.FANTOM]: '#1969FF',
  [ChainId.BSC]: '#F0B90B',
  [ChainId.AVALANCHE]: '#E84142',
  [ChainId.ARBITRUM]: '#4698FA',
  [ChainId.MATIC]: '#8247E5',
}

export const ChainLogo = {
  [ChainId.ETHEREUM]: '/images/networks/ethereum-white.svg',
  [ChainId.FANTOM]: '/images/networks/fantom-white.svg',
  [ChainId.ARBITRUM]: '/images/networks/arbitrum.svg',
  [ChainId.AVALANCHE]: '/images/networks/avalanche.svg',
  [ChainId.MATIC]: '/images/networks/polygon.svg',
}

export function getChainLogoURL(chainId: number) {
  let logoURL = 'https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/fantom/assets'
  chainId == ChainId.FANTOM ? logoURL = 'https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/fantom/assets'
    : chainId == ChainId.AVALANCHE ? logoURL = 'https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/avalanche/assets'
      : chainId == ChainId.ETHEREUM ? logoURL = 'https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/ethereum/assets'
        : chainId == ChainId.BSC ? logoURL = 'https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/binance/assets'
          : chainId == ChainId.MATIC ? logoURL = 'https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/polygon/assets'
            : chainId == ChainId.ARBITRUM ? logoURL = 'https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/arbitrum/assets'
              : chainId == ChainId.MOONRIVER ? logoURL = 'https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/moonriver/assets'
                : 'https://raw.githubusercontent.com/soulswapfinance/assets/prod/blockchains/fantom/assets'

  return logoURL
}

export function getChainLogo(chainId: number) {
  let logoURL = '/images/networks/fantom-white.svg'
  chainId == ChainId.FANTOM ? logoURL = '/images/networks/fantom-white.svg'
    : chainId == ChainId.AVALANCHE ? logoURL = '/images/networks/avalanche.svg'
      : chainId == ChainId.ETHEREUM ? logoURL = '/images/networks/ethereum-white.svg'
        : chainId == ChainId.BSC ? logoURL = '/images/networks/binance.svg'
          : chainId == ChainId.MATIC ? logoURL = '/images/networks/polygon.svg'
            : chainId == ChainId.ARBITRUM ? logoURL = '/images/networks/arbitrum.svg'
              : chainId == ChainId.MOONRIVER ? logoURL = '/images/networks/moonriver.svg'
                : '/images/networks/fantom-white.svg'

  return logoURL
}
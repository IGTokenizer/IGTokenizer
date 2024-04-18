import { ChainId } from "config"

export function getChainInfo(chainId: number, option: string) {
    let output = 'UNKNOWN NETWORK'
    if (chainId == ChainId.FANTOM) {
      option == 'NETWORK' ? output = 'Fantom Opera'
        : option == 'NAME' ? output = 'Fantom'
          : option == 'SYMBOL' ? output = 'FTM'
            : output = ''
    } else if (chainId == ChainId.AVALANCHE) {
      option == 'NETWORK' ? output = 'Avalanche Network'
        : option == 'NAME' ? output = 'Avalanche'
          : option == 'SYMBOL' ? output = 'AVAX'
            : output = ''
     } else if (chainId == ChainId.ETHEREUM) {
      option == 'NETWORK' ? output = 'Ethereum Mainnet'
        : option == 'NAME' ? output = 'Ethereum'
          : option == 'SYMBOL' ? output = 'ETH'
            : output = ''
      } else if (chainId == ChainId.BSC) {
      option == 'NETWORK' ? output = 'Binance Smart Chain'
        : option == 'NAME' ? output = 'Binance'
          : option == 'SYMBOL' ? output = 'BSC'
            : output = ''
      } else if (chainId == ChainId.MATIC) {
      option == 'NETWORK' ? output = 'Polygon (Matic)'
        : option == 'NAME' ? output = 'Polygon'
          : option == 'SYMBOL' ? output = 'MATIC'
            : output = '' 
      } else if (chainId == ChainId.BASE) {
      option == 'NETWORK' ? output = 'Base'
        : option == 'NAME' ? output = 'Base'
          : option == 'SYMBOL' ? output = 'BASE'
            : output = ''
      } else if (chainId == ChainId.ARBITRUM) {
      option == 'NETWORK' ? output = 'Arbitrum One'
        : option == 'NAME' ? output = 'Arbitrum'
          : option == 'SYMBOL' ? output = 'ARB'
            : output = ''
      } else if (chainId == ChainId.MOONRIVER) {
      option == 'NETWORK' ? output = 'Moonriver'
        : option == 'NAME' ? output = 'Moonriver'
          : option == 'SYMBOL' ? output = 'MOVR'
            : output = ''
      }
  
    return output
  }
  
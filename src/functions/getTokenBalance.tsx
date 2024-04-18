import Web3 from "web3";

export async function getTokenBalance (ABI, tokenAddress) {
  // web3
  const web3 = new Web3(window.ethereum);

  // gets: account of the connected wallet (refresh)
  const accounts = await web3.eth.getAccounts();
  const selectedAccount = accounts[0];

  // [√] set: token contract
  const tokenContract = await new web3.eth.Contract(ABI, tokenAddress);

  // this is the payable amount to send
  const balance = await tokenContract.methods.balanceOf(selectedAccount).call();
  console.log("balance: %s", balance);

  return balance;
}

export default getTokenBalance;
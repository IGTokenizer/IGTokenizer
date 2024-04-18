import { ABI_ERC20 } from "config";
import { useContract } from "./useContract";

export async function useTokenBalance(
  account: string,
  token = "0xF386eB6780a1e875616b5751794f909095283860"
) {
  const contract = useContract(token, ABI_ERC20);
  const balance = await contract.balanceOf(account);
  console.log("the balance is: %s", balance);
  return balance;
}
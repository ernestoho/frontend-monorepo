import {
  useSmartContractTransaction,
  UseSmartContractTransactionOptions,
} from "@elementfi/react-query-typechain/src/hooks/useSmartContractTransaction/useSmartContractTransaction";
import { ContractReceipt, Signer } from "ethers";

import { gscVaultContract } from "src/elf/contracts";
import { GSCVault } from "@elementfi/council-typechain";
import { UseMutationResult } from "react-query";

export function useKick(
  signer?: Signer,
  options?: UseSmartContractTransactionOptions<GSCVault, "kick">,
): UseMutationResult<
  ContractReceipt | undefined,
  unknown,
  Parameters<GSCVault["kick"]>
> {
  return useSmartContractTransaction(gscVaultContract, "kick", signer, options);
}

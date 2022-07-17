import { IsEthereumAddress } from 'class-validator';

export function vStringEthAddress(validationOptions) {
  return IsEthereumAddress(validationOptions);
}

export {
  vStringEthAddress as stringEthAddress,
  vStringEthAddress as validatableStringEthAddress,
};

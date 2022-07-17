import { IsEthereumAddress } from 'class-validator';

export function vStringEthAddress(...args) {
  return IsEthereumAddress(...args);
}

export {
  vStringEthAddress as stringEthAddress,
  vStringEthAddress as validatableStringEthAddress,
};

import { IsEthereumAddress } from 'class-validator';

export function vStringEthAddress(...args) {
  return IsEthereumAddress(...args);
}

export {
  vStringEthAddress as ethAddress,
  vStringEthAddress as stringEthAddress,
  vStringEthAddress as validatableStringEthAddress,
};

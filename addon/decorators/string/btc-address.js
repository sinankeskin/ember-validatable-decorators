import { IsBtcAddress } from 'class-validator';

export function vStringBtcAddress(...args) {
  return IsBtcAddress(...args);
}

export {
  vStringBtcAddress as btcAddress,
  vStringBtcAddress as stringBtcAddress,
  vStringBtcAddress as validatableStringBtcAddress,
};

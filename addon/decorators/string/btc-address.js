import { IsBtcAddress } from 'class-validator';

export function vStringBtcAddress(...args) {
  return IsBtcAddress(...args);
}

export {
  vStringBtcAddress as stringBtcAddress,
  vStringBtcAddress as validatableStringBtcAddress,
};

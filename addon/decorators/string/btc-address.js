import { IsBtcAddress } from 'class-validator';

export function vStringBtcAddress(validationOptions) {
  return IsBtcAddress(validationOptions);
}

export {
  vStringBtcAddress as stringBtcAddress,
  vStringBtcAddress as validatableStringBtcAddress,
};

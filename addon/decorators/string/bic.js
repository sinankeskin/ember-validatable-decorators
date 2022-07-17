import { IsBIC } from 'class-validator';

export function vStringBIC(...args) {
  return IsBIC(...args);
}

export {
  vStringBIC as bic,
  vStringBIC as stringBIC,
  vStringBIC as validatableStringBIC,
};

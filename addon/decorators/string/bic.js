import { IsBIC } from 'class-validator';

export function vStringBIC(validationOptions) {
  return IsBIC(validationOptions);
}

export { vStringBIC as stringBIC, vStringBIC as validatableStringBIC };

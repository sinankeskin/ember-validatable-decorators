import { IsIBAN } from 'class-validator';

export function vStringIBAN(validationOptions) {
  return IsIBAN(validationOptions);
}

export { vStringIBAN as stringIBAN, vStringIBAN as validatableStringIBAN };

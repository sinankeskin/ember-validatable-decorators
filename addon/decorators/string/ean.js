import { IsEAN } from 'class-validator';

export function vStringEAN(validationOptions) {
  return IsEAN(validationOptions);
}

export { vStringEAN as stringEAN, vStringEAN as validatableStringEAN };

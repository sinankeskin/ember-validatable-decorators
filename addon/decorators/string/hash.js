import { IsHash } from 'class-validator';

export function vStringHash(algorithm, validationOptions) {
  return IsHash(algorithm, validationOptions);
}

export { vStringHash as stringHash, vStringHash as validatableStringHash };

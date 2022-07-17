import { IsISSN } from 'class-validator';

export function vStringISSN(options, validationOptions) {
  return IsISSN(options, validationOptions);
}

export { vStringISSN as stringISSN, vStringISSN as validatableStringISSN };

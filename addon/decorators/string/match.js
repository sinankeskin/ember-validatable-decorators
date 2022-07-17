import { Matches } from 'class-validator';

export function vStringMatch(pattern, validationOptions) {
  return Matches(pattern, validationOptions);
}

export { vStringMatch as stringMatch, vStringMatch as validatableStringMatch };

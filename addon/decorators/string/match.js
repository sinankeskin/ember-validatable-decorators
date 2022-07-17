import { Matches } from 'class-validator';

export function vStringMatch(...args) {
  return Matches(...args);
}

export { vStringMatch as stringMatch, vStringMatch as validatableStringMatch };

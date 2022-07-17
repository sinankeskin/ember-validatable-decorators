import { IsISSN } from 'class-validator';

export function vStringISSN(...args) {
  return IsISSN(...args);
}

export { vStringISSN as stringISSN, vStringISSN as validatableStringISSN };

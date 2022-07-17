import { IsAlphanumeric } from 'class-validator';

export function vStringAlphanumeric(...args) {
  return IsAlphanumeric(...args);
}

export {
  vStringAlphanumeric as alphanumeric,
  vStringAlphanumeric as stringAlphanumeric,
  vStringAlphanumeric as validatableStringAlphanumeric,
};

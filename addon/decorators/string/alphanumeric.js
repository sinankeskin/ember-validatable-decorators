import { IsAlphanumeric } from 'class-validator';

export function vStringAlphanumeric(locale, validationOptions) {
  return IsAlphanumeric(locale, validationOptions);
}

export {
  vStringAlphanumeric as stringAlphanumeric,
  vStringAlphanumeric as validatableStringAlphanumeric,
};

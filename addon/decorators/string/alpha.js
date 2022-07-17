import { IsAlpha } from 'class-validator';

export function vStringAlpha(locale, validationOptions) {
  return IsAlpha(locale, validationOptions);
}

export { vStringAlpha as stringAlpha, vStringAlpha as validatableStringAlpha };

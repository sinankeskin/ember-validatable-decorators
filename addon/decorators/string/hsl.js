import { IsHSL } from 'class-validator';

export function vStringHSL(validationOptions) {
  return IsHSL(validationOptions);
}

export { vStringHSL as stringHSL, vStringHSL as validatableStringHSL };

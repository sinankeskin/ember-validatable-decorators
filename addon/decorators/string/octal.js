import { IsOctal } from 'class-validator';

export function vStringOctal(validationOptions) {
  return IsOctal(validationOptions);
}

export { vStringOctal as stringOctal, vStringOctal as validatableStringOctal };

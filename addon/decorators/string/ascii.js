import { IsAscii } from 'class-validator';

export function vStringAscii(validationOptions) {
  return IsAscii(validationOptions);
}

export { vStringAscii as stringAscii, vStringAscii as validatableStringAscii };

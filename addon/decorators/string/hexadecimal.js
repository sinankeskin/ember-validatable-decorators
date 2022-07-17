import { IsHexadecimal } from 'class-validator';

export function vStringHexadecimal(validationOptions) {
  return IsHexadecimal(validationOptions);
}

export {
  vStringHexadecimal as stringHexadecimal,
  vStringHexadecimal as validatableStringHexadecimal,
};

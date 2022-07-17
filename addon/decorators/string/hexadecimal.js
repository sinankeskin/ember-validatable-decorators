import { IsHexadecimal } from 'class-validator';

export function vStringHexadecimal(...args) {
  return IsHexadecimal(...args);
}

export {
  vStringHexadecimal as stringHexadecimal,
  vStringHexadecimal as validatableStringHexadecimal,
};

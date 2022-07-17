import { IsBase32 } from 'class-validator';

export function vStringBase32(validationOptions) {
  return IsBase32(validationOptions);
}

export {
  vStringBase32 as stringBase32,
  vStringBase32 as validatableStringBase32,
};

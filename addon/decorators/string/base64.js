import { IsBase64 } from 'class-validator';

export function vStringBase64(validationOptions) {
  return IsBase64(validationOptions);
}

export {
  vStringBase64 as stringBase64,
  vStringBase64 as validatableStringBase64,
};

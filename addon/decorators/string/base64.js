import { IsBase64 } from 'class-validator';

export function vStringBase64(...args) {
  return IsBase64(...args);
}

export {
  vStringBase64 as stringBase64,
  vStringBase64 as validatableStringBase64,
};

import { IsMultibyte } from 'class-validator';

export function vStringMultibyte(validationOptions) {
  return IsMultibyte(validationOptions);
}

export {
  vStringMultibyte as stringMultibyte,
  vStringMultibyte as validatableStringMultibyte,
};

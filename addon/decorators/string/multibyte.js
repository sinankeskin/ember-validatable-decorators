import { IsMultibyte } from 'class-validator';

export function vStringMultibyte(...args) {
  return IsMultibyte(...args);
}

export {
  vStringMultibyte as multibyte,
  vStringMultibyte as stringMultibyte,
  vStringMultibyte as validatableStringMultibyte,
};

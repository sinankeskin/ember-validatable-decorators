import { IsISBN } from 'class-validator';

export function vStringISBN(version, validationOptions) {
  return IsISBN(version, validationOptions);
}

export { vStringISBN as stringISBN, vStringISBN as validatableStringISBN };

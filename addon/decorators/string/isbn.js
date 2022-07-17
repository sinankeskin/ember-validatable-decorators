import { IsISBN } from 'class-validator';

export function vStringISBN(...args) {
  return IsISBN(...args);
}

export {
  vStringISBN as isbn,
  vStringISBN as stringISBN,
  vStringISBN as validatableStringISBN,
};

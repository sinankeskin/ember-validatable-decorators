import { IsIBAN } from 'class-validator';

export function vStringIBAN(...args) {
  return IsIBAN(...args);
}

export {
  vStringIBAN as iban,
  vStringIBAN as stringIBAN,
  vStringIBAN as validatableStringIBAN,
};

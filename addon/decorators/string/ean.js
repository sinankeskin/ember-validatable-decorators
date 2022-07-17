import { IsEAN } from 'class-validator';

export function vStringEAN(...args) {
  return IsEAN(...args);
}

export {
  vStringEAN as ean,
  vStringEAN as stringEAN,
  vStringEAN as validatableStringEAN,
};

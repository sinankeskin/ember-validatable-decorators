import { IsISIN } from 'class-validator';

export function vStringISIN(...args) {
  return IsISIN(...args);
}

export {
  vStringISIN as isin,
  vStringISIN as stringISIN,
  vStringISIN as validatableStringISIN,
};

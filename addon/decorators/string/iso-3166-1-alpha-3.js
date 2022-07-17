import { IsISO31661Alpha3 } from 'class-validator';

export function vStringISO31661Alpha3(...args) {
  return IsISO31661Alpha3(...args);
}

export {
  vStringISO31661Alpha3 as stringISO31661Alpha3,
  vStringISO31661Alpha3 as validatableStringISO31661Alpha3,
};

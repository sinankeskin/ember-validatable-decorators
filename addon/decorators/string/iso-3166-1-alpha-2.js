import { IsISO31661Alpha2 } from 'class-validator';

export function vStringISO31661Alpha2(...args) {
  return IsISO31661Alpha2(...args);
}

export {
  vStringISO31661Alpha2 as iso31661Alpha2,
  vStringISO31661Alpha2 as stringISO31661Alpha2,
  vStringISO31661Alpha2 as validatableStringISO31661Alpha2,
};

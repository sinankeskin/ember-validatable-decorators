import { IsISO31661Alpha3 } from 'class-validator';

export function vStringISO31661Alpha3(validationOptions) {
  return IsISO31661Alpha3(validationOptions);
}

export {
  vStringISO31661Alpha3 as stringISO31661Alpha3,
  vStringISO31661Alpha3 as validatableStringISO31661Alpha3,
};

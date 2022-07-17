import { IsPostalCode } from 'class-validator';

export function vStringPostalCode(locale, validationOptions) {
  return IsPostalCode(locale, validationOptions);
}

export {
  vStringPostalCode as stringPostalCode,
  vStringPostalCode as validatableStringPostalCode,
};

import { IsPassportNumber } from 'class-validator';

export function vStringPassportNumber(countryCode, validationOptions) {
  return IsPassportNumber(countryCode, validationOptions);
}

export {
  vStringPassportNumber as stringPassportNumber,
  vStringPassportNumber as validatableStringPassportNumber,
};

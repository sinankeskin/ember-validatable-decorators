import { IsPhoneNumber } from 'class-validator';

export function vStringPhoneNumber(region, validationOptions) {
  return IsPhoneNumber(region, validationOptions);
}

export {
  vStringPhoneNumber as stringPhoneNumber,
  vStringPhoneNumber as validatableStringPhoneNumber,
};

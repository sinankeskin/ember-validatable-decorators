import { IsNumberString } from 'class-validator';

export function vStringNumber(options, validationOptions) {
  return IsNumberString(options, validationOptions);
}

export {
  vStringNumber as stringNumber,
  vStringNumber as validatableStringNumber,
};

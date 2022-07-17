import { IsNegative } from 'class-validator';

export function vNumberNegative(number, validationOptions) {
  return IsNegative(validationOptions);
}

export {
  vNumberNegative as numberNegative,
  vNumberNegative as validatableNumberNegative,
};

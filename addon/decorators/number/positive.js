import { IsPositive } from 'class-validator';

export function vNumberPositive(number, validationOptions) {
  return IsPositive(validationOptions);
}

export {
  vNumberPositive as numberPositive,
  vNumberPositive as validatableNumberPositive,
};

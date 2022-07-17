import { IsDivisibleBy } from 'class-validator';

export function vNumberDivisibleBy(number, validationOptions) {
  return IsDivisibleBy(number, validationOptions);
}

export {
  vNumberDivisibleBy as numberDivisibleBy,
  vNumberDivisibleBy as validatableNumberDivisibleBy,
};
